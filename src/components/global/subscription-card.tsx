import { CheckIcon } from 'lucide-react'
import React from 'react'

import { CardBody, CardContainer, CardItem } from '@/components/global/3d-card'

const plans = [
  {
    name: 'Hobby',
    price: '$0',
    features: [
      '3 Free automations',
      '100 tasks per month',
      'Two-step Actions',
    ],
    cta: 'Try now →',
    cta2: 'Get Started Now',
    highlight: false,
    cardClass: 'bg-gray-50 dark:bg-black dark:border-white/[0.2] border-black/[0.1]',
    icon: <CheckIcon className="w-8 h-8 text-purple-400 mb-2" />,
  },
  {
    name: 'Pro Plan',
    price: '$15',
    features: [
      '10 Free automations',
      '400 tasks per month',
      'Two-step Actions',
    ],
    cta: 'Try now →',
    cta2: 'Get Started Now',
    highlight: true,
    cardClass: 'bg-gray-50 dark:bg-black dark:border-[#E2CBFF] border-black/[0.1]',
    icon: <CheckIcon className="w-8 h-8 text-purple-600 mb-2" />,
  },
  {
    name: 'Unlimited',
    price: '$99',
    features: [
      'Unlimited Free automations',
      '10000 tasks per month',
      'Two-step Actions with automation',
    ],
    cta: 'Try now →',
    cta2: 'Get Started Now',
    highlight: false,
    cardClass: 'bg-gray-50 dark:bg-black dark:border-white/[0.2] border-black/[0.1]',
    icon: <CheckIcon className="w-8 h-8 text-green-500 mb-2" />,
  },
];

const SubscriptionCard = () => {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
      {plans.map((plan) => (
        <CardContainer key={plan.name} className="inter-var ">
          <CardBody
            className={`relative group/card w-full md:!w-[350px] h-auto rounded-xl p-6 border transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${plan.cardClass} ${plan.highlight ? 'z-10 scale-105 shadow-2xl' : ''}`}
          >
            {plan.highlight && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#a18cd1] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">Most Popular</span>
            )}
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white flex flex-col items-center">
              {/* {plan.icon} */}
              {plan.name}
              <h2 className="text-6xl mt-2">{plan.price}</h2>
            </CardItem>
            <CardItem translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 flex flex-col items-center">
              <p className="mb-4 text-center">Experience what makes us different, but don&apos;t say we didn&apos;t warn you, you might fall in love.</p>
              <ul className="my-4 flex flex-col gap-2 w-full">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
              >
                {plan.cta}
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className={`px-4 py-2 rounded-xl text-xs font-bold text-white transition-all duration-200 shadow-md ${plan.highlight ? 'bg-[#a18cd1] hover:bg-[#b993e6]' : 'bg-black dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200'}`}
              >
                {plan.cta2}
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}

export default SubscriptionCard
