import {View, Text, Image} from 'react-native'
import React from 'react'
import {formatCurrency} from "@/lib/utils";
import { useI18n } from "@/i18n/I18nProvider";

const UpcomingSubscriptionCard = ({ name, price, daysLeft, icon, currency }: UpcomingSubscription) => {
    const { direction, locale, t } = useI18n();
    const textDirection = { direction, writingDirection: direction } as const;

    return (
        <View className="upcoming-card">
            <View className="upcoming-row">
                <Image source={icon} className="upcoming-icon" />
                <View>
                    <Text className="upcoming-price" style={textDirection}>{formatCurrency(price, currency, locale)}</Text>
                    <Text className="upcoming-meta" numberOfLines={1} style={textDirection}>
                        {daysLeft > 1 ? t('subscription.daysLeft', { count: daysLeft }) : t('subscription.lastDay')}
                    </Text>
                </View>
            </View>

            <Text className="upcoming-name" numberOfLines={1} style={textDirection}>{name}</Text>
        </View>
    )
}
export default UpcomingSubscriptionCard
