import {
  localTaxManagementSystem,
  pbbPaymentSystem,
  shipmentCouriersIntegration,
} from './descriptions';

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
    link: '/projects/shipment-couriers-integration',
    demo: '/projects/shipment-couriers-integration',
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
    link: '/projects/pbb-payment-system',
    demo: '/projects/pbb-payment-system',
  },
  {
    id: 3,
    slug: 'local-tax-management-system',
    title: 'Local Tax Management System',
    description:
      'Contributed to the enhancement and customization of an existing local tax management system covering multiple tax types, including Hotel Tax, Mineral Water Tax, Advertising Tax, and other regional taxes.',
    longDescription: localTaxManagementSystem,
    image: '/images/project-three.jpg',
    tags: ['MySQL', 'Yii Framework (PHP)', 'Bootstrap'],
    link: '/projects/local-tax-management-system',
    demo: '/projects/local-tax-management-system',
  },
];
