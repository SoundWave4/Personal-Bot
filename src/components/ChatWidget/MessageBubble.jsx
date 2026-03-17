import { useMemo } from 'react';
import styles from './ChatWidget.module.css';

/**
 * Renders inline markdown (bold, links) safely as React elements.
 * Also handles newlines as <br />.
 */
function parseInlineMarkdown(text) {
  // Split on newlines first, then parse inline elements within each line
  const lines = text.split('\n');
  const elements = [];

  lines.forEach((line, lineIdx) => {
    if (lineIdx > 0) {
      elements.push(<br key={`br-${lineIdx}`} />);
    }

    // Regex to match **bold** and [text](url)
    const regex = /(\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\))/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(line)) !== null) {
      // Push text before match
      if (match.index > lastIndex) {
        elements.push(line.slice(lastIndex, match.index));
      }

      if (match[2]) {
        // Bold: **text**
        elements.push(
          <strong key={`b-${lineIdx}-${match.index}`}>{match[2]}</strong>
        );
      } else if (match[3] && match[4]) {
        // Link: [text](url) — only allow http/https to prevent javascript: XSS
        const url = match[4];
        if (/^https?:\/\//.test(url)) {
          elements.push(
            <a
              key={`a-${lineIdx}-${match.index}`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {match[3]}
            </a>
          );
        } else {
          elements.push(match[0]);
        }
      }

      lastIndex = match.index + match[0].length;
    }

    // Push remaining text after last match
    if (lastIndex < line.length) {
      elements.push(line.slice(lastIndex));
    }
  });

  return elements;
}

function formatTime(date) {
  const d = date instanceof Date ? date : new Date(date);
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  return `${hh}:${mm}`;
}

function MessageBubble({ message }) {
  const isUser = message.role === 'user';

  const content = useMemo(
    () => parseInlineMarkdown(message.content),
    [message.content]
  );

  return (
    <div
      className={`${styles.messageBubbleWrap} ${
        isUser ? styles.messageBubbleWrapUser : styles.messageBubbleWrapAssistant
      }`}
    >
      <div
        className={`${styles.messageBubble} ${
          isUser ? styles.messageBubbleUser : styles.messageBubbleAssistant
        }`}
      >
        {content}
      </div>
      <span
        className={`${styles.messageTime} ${
          isUser ? styles.messageTimeUser : styles.messageTimeAssistant
        }`}
      >
        {formatTime(message.timestamp)}
      </span>
    </div>
  );
}

export default MessageBubble;
