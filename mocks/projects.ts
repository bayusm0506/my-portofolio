import { pbbPaymentSystem, shipmentCouriersIntegration } from './descriptions';

export const projects = [
  {
    id: 1,
    slug: 'shipment-couriers-integration',
    title: 'Shipment Couriers Integration',
    description:
      'Developed and scaled a Courier Delivery Integration system to support end-to-end shipping operations across multiple logistics partners. The system enables seamless processes starting from rate checking, shipment booking, tracking, and cancellation, ensuring a reliable and consistent integration layer between internal platforms and third-party courier services.',
    longDescription: shipmentCouriersIntegration,
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
    slug: 'pbb-payment-system',
    title: 'Land and Building Tax (PBB) Payment System',
    description:
      'Developed and enhanced a Land and Building Tax (PBB) payment system to support end-to-end tax settlement processes, including taxpayer payments, annual reporting, and export of annual tax payment (SPT) data',
    longDescription: pbbPaymentSystem,
    image: '/images/project-two.jpg',
    tags: ['Oracle Database', 'Yii Framework', 'Bootstrap'],
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
