// Services.jsx
import React from 'react';
import { Truck, HeadphonesIcon, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Truck className="w-8 h-8 text-white" />,
      title: 'FREE AND FAST DELIVERY',
      desc: 'Free delivery for all orders over $140'
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-white" />,
      title: '24/7 CUSTOMER SERVICE',
      desc: 'Friendly 24/7 customer support'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'MONEY BACK GUARANTEE',
      desc: 'We return money within 30 days'
    }
  ];

return (
    <section className="my-32 lg:my-40">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {services.map((service, index) => (
                    <div key={index} className="text-center">
                        <div className="w-16 h-16 bg-black border-8 border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
};

export default Services;
