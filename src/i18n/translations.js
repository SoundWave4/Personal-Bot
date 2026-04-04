const translations = {
  de: {
    nav: {
      services: 'Leistungen',
      howItWorks: 'So funktioniert\'s',
      chatbot: 'Chatbot Demo',
      about: 'Über mich',
      contact: 'Kontakt',
    },

    hero: {
      title: 'Professionelle Websites & KI-Chatbots für Ihr Unternehmen',
      subtitle: 'Modern, schnell, DSGVO-konform — deutschlandweit verfügbar',
      ctaServices: 'Leistungen ansehen',
      ctaChatbot: 'Chatbot testen',
    },

    services: {
      title: 'Leistungen',
      subtitle: 'Von der einfachen Landingpage bis zur KI-gestützten Kundenbetreuung — alles aus einer Hand.',

      websites: {
        title: 'Website Erstellung',

        starter: {
          name: 'Starter',
          price: '200 €',
          description: 'Landingpage / Onepager — perfekt für den Einstieg.',
          features: [
            'Mobilfreundliches Design',
            'DSGVO-konform',
            'Kontaktformular',
            'Lieferung in 5 Werktagen',
          ],
          cta: 'Starter anfragen',
        },

        standard: {
          name: 'Standard',
          price: '500 €',
          description: 'Business-Website mit 3–5 Seiten — ideal für kleine Unternehmen.',
          features: [
            'Alles aus Starter',
            'SEO-Optimierung',
            'Google Maps Integration',
            'Cookie-Banner & Impressum',
            'Content-Management Einweisung',
          ],
          cta: 'Standard anfragen',
        },

        premium: {
          name: 'Premium',
          price: 'ab 900 €',
          description: 'Komplette Website mit KI-Chatbot Integration — die professionelle Lösung.',
          features: [
            'Alles aus Standard',
            'KI-Chatbot Integration',
            'Individuelle Funktionen',
            'Priority Support',
            'Performance-Optimierung',
          ],
          cta: 'Premium anfragen',
          badge: 'Beliebt',
        },
      },

      redesign: {
        title: 'Website Redesign',
        description: 'Ihre bestehende Website wird modernisiert — schneller, schöner, mobilfreundlich.',
        features: [
          'Modernes Design & UX',
          'Mobile Optimierung',
          'Performance-Verbesserung',
          'SEO-Audit & Anpassung',
          'DSGVO-Überprüfung',
        ],
        cta: 'Redesign anfragen',
      },

      chatbot: {
        title: 'KI-Chatbot',

        faq: {
          name: 'FAQ-Chatbot',
          price: 'ab 500 €',
          description: 'Beantwortet häufige Kundenfragen automatisch — 24/7 erreichbar.',
          features: [
            'Automatische Antworten auf FAQs',
            'Auf Ihre Inhalte trainiert',
            'Mehrsprachig (DE/EN)',
            'DSGVO-konforme Datenverarbeitung',
            'Einfache Integration',
          ],
          cta: 'FAQ-Chatbot anfragen',
        },

        assistant: {
          name: 'KI-Assistent',
          price: 'ab 1.500 €',
          description: 'Intelligenter Assistent für Terminbuchung, Lead-Erfassung und mehr.',
          features: [
            'Alles aus FAQ-Chatbot',
            'Terminbuchung & Kalenderanbindung',
            'Lead-Erfassung & Qualifizierung',
            'CRM-Anbindung',
            'Individuelle Workflows',
          ],
          cta: 'KI-Assistent anfragen',
        },

        maintenance: {
          name: 'Monatliche Wartung',
          price: 'ab 50 €/Monat',
          description: 'Laufende Pflege, Updates und Optimierung Ihres Chatbots.',
        },
      },

      automation: {
        title: 'KI-Automatisierung',

        receptionist: {
          name: 'KI-Rezeptionist',
          price: 'ab 1.800 €',
          description: 'Ein KI-Sprachassistent, der Anrufe 24/7 entgegennimmt, Fragen beantwortet und Termine bucht.',
          features: [
            'Anrufe beantworten — rund um die Uhr',
            'Automatische Terminbuchung im Kalender',
            'Fragen zum Unternehmen beantworten',
            'Spam-Anrufe filtern & Anrufe weiterleiten',
            'Kein verpasster Lead mehr',
          ],
          cta: 'KI-Rezeptionist anfragen',
        },

        reactivation: {
          name: 'Lead-Reaktivierung',
          price: 'ab 2.700 €',
          description: 'KI kontaktiert Ihre alten Leads automatisch per E-Mail, SMS oder Telefon — und bringt sie zurück.',
          features: [
            'Bestehende Kontaktliste aktivieren',
            'Automatische Kontaktaufnahme per E-Mail/SMS/Telefon',
            'Personalisierte Ansprache durch KI',
            'Termine buchen & Pipeline füllen',
            'Performance-basierte Abrechnung möglich',
          ],
          cta: 'Lead-Reaktivierung anfragen',
          badge: 'Neu',
        },

        speedToLead: {
          name: 'Speed-to-Lead',
          price: 'ab 2.700 €',
          description: 'Neue Leads werden innerhalb von 5 Minuten automatisch angerufen — bevor sie zur Konkurrenz gehen.',
          features: [
            'Automatischer Rückruf in unter 5 Minuten',
            'Lead-Qualifizierung durch KI',
            'Direkte Terminbuchung im Kalender',
            'Integration mit Ihren Werbekampagnen',
            'Bis zu 100x höhere Conversion-Rate',
          ],
          cta: 'Speed-to-Lead anfragen',
        },

        retainer: {
          name: 'Monatliche Betreuung',
          price: 'ab 450 €/Monat',
          description: 'Laufende Optimierung, Monitoring und Wartung Ihrer KI-Automatisierung.',
        },
      },
    },

    howItWorks: {
      title: 'So funktioniert\'s',
      subtitle: 'In drei einfachen Schritten zu Ihrer neuen Website oder Ihrem KI-Chatbot.',
      steps: [
        {
          title: 'Kostenlose Erstberatung',
          description: 'Wir besprechen Ihre Wünsche und Anforderungen — unverbindlich und kostenlos.',
        },
        {
          title: 'Umsetzung',
          description: 'Ich erstelle Ihre Website oder Ihren Chatbot — mit regelmäßigen Updates für Sie.',
        },
        {
          title: 'Übergabe',
          description: 'Sie erhalten alles fertig, inklusive Einweisung und Dokumentation.',
        },
      ],
    },

    chatbotDemo: {
      title: 'Testen Sie den KI-Chatbot selbst!',
      subtitle: 'So könnte ein Chatbot auf Ihrer Website aussehen. Stellen Sie eine Frage — der Bot antwortet sofort.',
      cta: 'Jetzt unverbindlich beraten lassen',
      ctaText: 'Gefällt Ihnen der Chatbot? Lassen Sie sich unverbindlich beraten!',
    },

    chat: {
      greeting: 'Hallo! \u{1F44B} Ich bin der KI-Assistent. Wie kann ich Ihnen helfen? Sie können mich zu unseren Leistungen, Preisen oder Verfügbarkeit fragen — oder direkt einen Beratungstermin vereinbaren.',
      placeholder: 'Schreiben Sie eine Nachricht...',
      title: 'KI-Assistent',
      rateLimit: 'Nachrichtenlimit erreicht. Bitte kontaktieren Sie uns direkt für weitere Fragen.',
      rateLimitWarning: 'Noch {count} Nachrichten übrig.',
      error: 'Entschuldigung, es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
      networkError: 'Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung.',
    },

    about: {
      title: 'Über mich',
      bio: 'Ich bin Saba, ein freiberuflicher Webentwickler aus Berlin. Ich helfe kleinen und mittelständischen Unternehmen dabei, mit professionellen Websites und KI-Chatbots online sichtbar zu werden und ihre Kunden besser zu erreichen.',
      skills: ['React', 'JavaScript', 'Node.js', 'KI-Integration', 'DSGVO-Compliance', 'Responsive Design'],
      location: 'Berlin, Deutschland',
      portfolioLabel: 'Portfolio',
      portfolioCta: 'Portfolio ansehen',
    },

    contact: {
      title: 'Kontakt',
      subtitle: 'Bereit für Ihr Projekt? Schreiben Sie mir — ich antworte innerhalb von 24 Stunden.',
      name: 'Name',
      namePlaceholder: 'Ihr Name',
      email: 'E-Mail',
      emailPlaceholder: 'ihre@email.de',
      message: 'Nachricht',
      messagePlaceholder: 'Beschreiben Sie kurz Ihr Projekt oder Ihre Anfrage...',
      submit: 'Nachricht senden',
      submitting: 'Wird gesendet...',
      success: 'Vielen Dank! Ich melde mich innerhalb von 24 Stunden bei Ihnen.',
      error: 'Leider konnte Ihre Nachricht nicht gesendet werden. Bitte versuchen Sie es erneut.',
      chatbotCta: 'Oder fragen Sie direkt den Chatbot!',
      required: 'Pflichtfeld',
      invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      divider: 'oder',
    },

    footer: {
      services: 'Leistungen',
      legal: 'Rechtliches',
      contact: 'Kontakt',
      impressum: 'Impressum',
      datenschutz: 'Datenschutz',
      copyright: '\u00A9 {year} Saba Gogia. Alle Rechte vorbehalten.',
      location: 'Berlin, Deutschland',
      madeWith: 'Entwickelt mit React & Cloudflare',
    },

    legal: {
      backHome: '\u2190 Zur\u00fcck zur Startseite',
    },

    cookie: {
      text: 'Diese Website verwendet nur technisch notwendige Cookies.',
      accept: 'Verstanden',
    },
  },

  en: {
    nav: {
      services: 'Services',
      howItWorks: 'How It Works',
      chatbot: 'Chatbot Demo',
      about: 'About',
      contact: 'Contact',
    },

    hero: {
      title: 'Professional Websites & AI Chatbots for Your Business',
      subtitle: 'Modern, fast, GDPR-compliant — available across Germany & the EU',
      ctaServices: 'View Services',
      ctaChatbot: 'Try the Chatbot',
    },

    services: {
      title: 'Services',
      subtitle: 'From simple landing pages to AI-powered customer support — everything from one source.',

      websites: {
        title: 'Website Creation',

        starter: {
          name: 'Starter',
          price: '\u20AC200',
          description: 'Landing page / one-pager — perfect for getting started.',
          features: [
            'Mobile-friendly design',
            'GDPR-compliant',
            'Contact form',
            'Delivery in 5 business days',
          ],
          cta: 'Request Starter',
        },

        standard: {
          name: 'Standard',
          price: '\u20AC500',
          description: 'Business website with 3\u20135 pages — ideal for small businesses.',
          features: [
            'Everything from Starter',
            'SEO optimization',
            'Google Maps integration',
            'Cookie banner & legal pages',
            'Content management walkthrough',
          ],
          cta: 'Request Standard',
        },

        premium: {
          name: 'Premium',
          price: 'from \u20AC900',
          description: 'Complete website with AI chatbot integration — the professional solution.',
          features: [
            'Everything from Standard',
            'AI chatbot integration',
            'Custom functionality',
            'Priority support',
            'Performance optimization',
          ],
          cta: 'Request Premium',
          badge: 'Popular',
        },
      },

      redesign: {
        title: 'Website Redesign',
        description: 'Your existing website gets a modern makeover — faster, better-looking, mobile-friendly.',
        features: [
          'Modern design & UX',
          'Mobile optimization',
          'Performance improvement',
          'SEO audit & adjustments',
          'GDPR compliance review',
        ],
        cta: 'Request Redesign',
      },

      chatbot: {
        title: 'AI Chatbot',

        faq: {
          name: 'FAQ Chatbot',
          price: 'from \u20AC500',
          description: 'Answers common customer questions automatically — available 24/7.',
          features: [
            'Automatic FAQ responses',
            'Trained on your content',
            'Multilingual (DE/EN)',
            'GDPR-compliant data processing',
            'Easy integration',
          ],
          cta: 'Request FAQ Chatbot',
        },

        assistant: {
          name: 'AI Assistant',
          price: 'from \u20AC1,500',
          description: 'Intelligent assistant for appointment booking, lead capture, and more.',
          features: [
            'Everything from FAQ Chatbot',
            'Appointment booking & calendar integration',
            'Lead capture & qualification',
            'CRM integration',
            'Custom workflows',
          ],
          cta: 'Request AI Assistant',
        },

        maintenance: {
          name: 'Monthly Maintenance',
          price: 'from \u20AC50/month',
          description: 'Ongoing maintenance, updates, and optimization of your chatbot.',
        },
      },

      automation: {
        title: 'AI Automation',

        receptionist: {
          name: 'AI Receptionist',
          price: 'from \u20AC1,800',
          description: 'An AI voice assistant that answers calls 24/7, answers questions, and books appointments.',
          features: [
            'Answer calls — around the clock',
            'Automatic appointment booking to calendar',
            'Answer questions about your business',
            'Filter spam calls & transfer when needed',
            'Never miss a lead again',
          ],
          cta: 'Request AI Receptionist',
        },

        reactivation: {
          name: 'Lead Reactivation',
          price: 'from \u20AC2,700',
          description: 'AI contacts your old leads automatically via email, SMS, or phone — and brings them back.',
          features: [
            'Activate your existing contact list',
            'Automatic outreach via email/SMS/phone',
            'Personalized messaging powered by AI',
            'Book appointments & fill your pipeline',
            'Performance-based pricing available',
          ],
          cta: 'Request Lead Reactivation',
          badge: 'New',
        },

        speedToLead: {
          name: 'Speed-to-Lead',
          price: 'from \u20AC2,700',
          description: 'New leads get called back automatically within 5 minutes — before they go to your competitor.',
          features: [
            'Automatic callback in under 5 minutes',
            'AI-powered lead qualification',
            'Direct appointment booking to calendar',
            'Integration with your ad campaigns',
            'Up to 100x higher conversion rate',
          ],
          cta: 'Request Speed-to-Lead',
        },

        retainer: {
          name: 'Monthly Support',
          price: 'from \u20AC450/month',
          description: 'Ongoing optimization, monitoring, and maintenance of your AI automation.',
        },
      },
    },

    howItWorks: {
      title: 'How It Works',
      subtitle: 'Three simple steps to your new website or AI chatbot.',
      steps: [
        {
          title: 'Free Consultation',
          description: 'We discuss your needs and requirements — no obligations, no cost.',
        },
        {
          title: 'Development',
          description: 'I build your website or chatbot — with regular progress updates.',
        },
        {
          title: 'Delivery',
          description: 'You receive everything ready, including a walkthrough and documentation.',
        },
      ],
    },

    chatbotDemo: {
      title: 'Try the AI Chatbot Yourself!',
      subtitle: 'This is what a chatbot on your website could look like. Ask a question — the bot answers instantly.',
      cta: 'Get a free consultation',
      ctaText: 'Like what you see? Get a free consultation!',
    },

    chat: {
      greeting: 'Hello! \u{1F44B} I\'m the AI assistant. How can I help you? You can ask me about our services, pricing, or availability — or book a free consultation right away.',
      placeholder: 'Type a message...',
      title: 'AI Assistant',
      rateLimit: 'Message limit reached. Please contact us directly for further questions.',
      rateLimitWarning: '{count} messages remaining.',
      error: 'Sorry, an error occurred. Please try again.',
      networkError: 'Network error. Please check your internet connection.',
    },

    about: {
      title: 'About Me',
      bio: 'I\'m Saba, a freelance web developer based in Berlin. I help small and medium-sized businesses become visible online with professional websites and AI chatbots, reaching their customers more effectively.',
      skills: ['React', 'JavaScript', 'Node.js', 'AI Integration', 'GDPR Compliance', 'Responsive Design'],
      location: 'Berlin, Germany',
      portfolioLabel: 'Portfolio',
      portfolioCta: 'View Portfolio',
    },

    contact: {
      title: 'Contact',
      subtitle: 'Ready for your project? Write to me — I respond within 24 hours.',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      message: 'Message',
      messagePlaceholder: 'Briefly describe your project or inquiry...',
      submit: 'Send Message',
      submitting: 'Sending...',
      success: 'Thank you! I\'ll get back to you within 24 hours.',
      error: 'Unfortunately, your message could not be sent. Please try again.',
      chatbotCta: 'Or ask the chatbot directly!',
      required: 'Required',
      invalidEmail: 'Please enter a valid email address.',
      divider: 'or',
    },

    footer: {
      services: 'Services',
      legal: 'Legal',
      contact: 'Contact',
      impressum: 'Imprint',
      datenschutz: 'Privacy Policy',
      copyright: '\u00A9 {year} Saba Gogia. All rights reserved.',
      location: 'Berlin, Germany',
      madeWith: 'Built with React & Cloudflare',
    },

    legal: {
      backHome: '\u2190 Back to Home',
    },

    cookie: {
      text: 'This website uses only technically necessary cookies.',
      accept: 'Got it',
    },
  },
};

export default translations;
