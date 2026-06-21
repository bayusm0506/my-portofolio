export const projects = [
  {
    id: 1,
    slug: 'shipment-couriers-integration',
    title: 'Shipment Couriers Integration',
    description:
      'Developed and scaled a Courier Delivery Integration system to support end-to-end shipping operations across multiple logistics partners. The system enables seamless processes starting from rate checking, shipment booking, tracking, and cancellation, ensuring a reliable and consistent integration layer between internal platforms and third-party courier services.',
    longDescription: `
        Developed and scaled a Courier Delivery Integration system to support end-to-end shipping operations across multiple logistics partners. The system enables seamless processes starting from rate checking, shipment booking, tracking, and cancellation, ensuring a reliable and consistent integration layer between internal platforms and third-party courier services.
        Key contributions included designing a flexible integration architecture to support onboarding of new courier partners with minimal changes, validating shipment constraints such as weight limits, and ensuring all outbound payloads—including insurance data—are accurate and aligned with client requirements. Implemented district mapping between courier services and internal systems to maintain consistency in delivery coverage and pricing.

        Enhanced cross-platform compatibility by enabling shipping cost visibility across platforms such as WooCommerce, Shopify, and Jubelio omnichannel. Additionally, supported API consumers by ensuring robust documentation and reliable service performance for external client integrations. 
        Built internal tools to improve operational efficiency, including shipment (AWB) monitoring dashboards, courier configuration management (enable/disable), promotional campaign setup for couriers, and claim management workflows for lost shipments. Also implemented announcement features to communicate important updates to sellers and clients directly through the system.
      `,
    image: '/images/project-one.jpg',
    tags: [
      'Next.js',
      'Fastify',
      'MongoDB',
      'PostgreSQL',
      'RabbitMQ',
      'Kafka',
      'Redis',
      'Kibana',
      'Grafana',
      'GitHub',
      'CI/CD',
    ],
    link: 'https://github.com/yourusername/project-one',
    demo: 'https://project-one-demo.com',
  },
  {
    id: 2,
    slug: 'project-two',
    title: 'Project Two',
    description: 'Full-stack solution with real-time features',
    longDescription:
      'A full-stack application built with Node.js backend and React frontend, featuring real-time data synchronization and user authentication.',
    image: '/images/project-two.jpg',
    tags: ['Node.js', 'React', 'PostgreSQL', 'WebSocket'],
    link: 'https://github.com/yourusername/project-two',
    demo: 'https://project-two-demo.com',
  },
  {
    id: 3,
    slug: 'project-three',
    title: 'Project Three',
    description: 'Mobile-first responsive design showcase',
    longDescription:
      'A mobile-first responsive web application demonstrating advanced CSS techniques and progressive enhancement principles for cross-device compatibility.',
    image: '/images/project-three.jpg',
    tags: ['CSS', 'JavaScript', 'Responsive', 'Mobile'],
    link: 'https://github.com/yourusername/project-three',
    demo: 'https://project-three-demo.com',
  },
];
