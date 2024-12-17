import { BILLING_INTERVAL, type PricingPlan } from '@/types/Subscription';

export const PLAN_ID = {
    FREE: 'free',
    PREMIUM: 'premium',
    ENTERPRISE: 'enterprise',
} as const;

export const PricingPlanList: Record<string, PricingPlan> = {
    [PLAN_ID.FREE]: {
        id: PLAN_ID.FREE,
        isPopular: false,
        href: '/sign-up',
        btText: 'free_plan_button',
        price: 0,
        interval: BILLING_INTERVAL.MONTH,
        testPriceId: '',
        devPriceId: '',
        prodPriceId: '',
        features: {
            common: {
                teamMember: 2,
                website: 2,
                storage: 2,
                transfer: 2,
            },
            individual: [
            ],
        },
    },
    [PLAN_ID.PREMIUM]: {
        id: PLAN_ID.PREMIUM,
        isPopular: true,
        href: '/sign-up',
        btText: 'premium_plan_button',
        price: 99,
        interval: BILLING_INTERVAL.MONTH,
        testPriceId: 'price_premium_test', // Use for testing
        // FIXME: Update the price ID, you can create it after running `npm run stripe:setup-price`
        devPriceId: 'price_1PNksvKOp3DEwzQlGOXO7YBK',
        prodPriceId: '',
        features: {
            common: {
                teamMember: 5,
                website: 5,
                storage: 5,
                transfer: 5,
            },
            individual: [
                'feature_indiviual_email_support',
                'feature_indiviual_statics_report'
            ],
        },
    },
    [PLAN_ID.ENTERPRISE]: {
        id: PLAN_ID.ENTERPRISE,
        isPopular: false,
        href: '/sign-up',
        btText: 'enterprise_plan_button',
        price: 199,
        interval: BILLING_INTERVAL.MONTH,
        testPriceId: 'price_enterprise_test', // Use for testing
        // FIXME: Update the price ID, you can create it after running `npm run stripe:setup-price`
        devPriceId: 'price_1PNksvKOp3DEwzQli9IvXzgb',
        prodPriceId: 'price_123',
        features: {
            common: {
                teamMember: 100,
                website: 100,
                storage: 100,
                transfer: 100,
            },
            individual: [
                'feature_indiviual_ai_assist',
                'feature_indiviual_online_support',
                'feature_indiviual_statics_report'
            ],
        },
    },
};
