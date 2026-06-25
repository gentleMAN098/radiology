import {View, Text, Image, Pressable} from 'react-native'
import React from 'react'
import {formatCurrency, formatStatusLabel, formatSubscriptionDateTime} from "@/lib/utils";
import { clsx } from "clsx";
import { useI18n } from "@/i18n/I18nProvider";

const SubscriptionCard = ({ name, price, currency, icon, billing, color, category, plan, renewalDate, expanded, onPress, paymentMethod, startDate, status}: SubscriptionCardProps) => {
    const { direction, isRTL, locale, t } = useI18n();
    const textDirection = { direction, writingDirection: direction } as const;
    const fallback = t('common.notProvided');

    return (
        <Pressable onPress={onPress} className={clsx('sub-card', expanded ? 'sub-card-expanded' : 'bg-card')} style={!expanded && color ? { backgroundColor: color } : undefined}>
            <View className="sub-head">
                <View className="sub-main">
                    <Image source={icon} className="sub-icon" />
                    <View className="sub-copy">
                        <Text numberOfLines={1} className="sub-title" style={textDirection}>
                            {name}
                        </Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" className="sub-meta" style={textDirection}>
                            {category?.trim() ? t(`subscription.categories.${category.trim()}`) : plan?.trim() || (renewalDate ? formatSubscriptionDateTime(renewalDate, locale, fallback) : '')}
                        </Text>
                    </View>
                </View>

                <View className="sub-price-box">
                    <Text className="sub-price" style={textDirection}>{formatCurrency(price, currency, locale)}</Text>
                    <Text className="sub-billing" style={textDirection}>{t(`subscription.frequencies.${billing}`)}</Text>
                </View>
            </View>

            {expanded && (
                <View className="sub-bdy">
                    <View className="sub-details">
                        <View className="sub-row">
                            <View className="sub-row-copy">
                                <Text className="sub-label" style={textDirection}>{t('subscription.payment')}</Text>
                                <Text className="sub-value" numberOfLines={1} ellipsizeMode="tail" style={[textDirection, { textAlign: isRTL ? 'right' : 'left' }]}>{paymentMethod?.trim() ?? fallback}</Text>
                            </View>
                        </View>
                        <View className="sub-row">
                            <View className="sub-row-copy">
                                <Text className="sub-label" style={textDirection}>{t('subscription.category')}</Text>
                                <Text className="sub-value" numberOfLines={1} ellipsizeMode="tail" style={[textDirection, { textAlign: isRTL ? 'right' : 'left' }]}>{category?.trim() ? t(`subscription.categories.${category.trim()}`) : plan?.trim() || fallback}</Text>
                            </View>
                        </View>
                        <View className="sub-row">
                            <View className="sub-row-copy">
                                <Text className="sub-label" style={textDirection}>{t('subscription.started')}</Text>
                                <Text className="sub-value" numberOfLines={1} ellipsizeMode="tail" style={[textDirection, { textAlign: isRTL ? 'right' : 'left' }]}>{startDate ? formatSubscriptionDateTime(startDate, locale, fallback) : fallback}</Text>
                            </View>
                        </View>
                        <View className="sub-row">
                            <View className="sub-row-copy">
                                <Text className="sub-label" style={textDirection}>{t('subscription.renewalDate')}</Text>
                                <Text className="sub-value" numberOfLines={1} ellipsizeMode="tail" style={[textDirection, { textAlign: isRTL ? 'right' : 'left' }]}>{renewalDate ? formatSubscriptionDateTime(renewalDate, locale, fallback) : fallback}</Text>
                            </View>
                        </View>
                        <View className="sub-row">
                            <View className="sub-row-copy">
                                <Text className="sub-label" style={textDirection}>{t('subscription.status')}</Text>
                                <Text className="sub-value" numberOfLines={1} ellipsizeMode="tail" style={[textDirection, { textAlign: isRTL ? 'right' : 'left' }]}>{status ? formatStatusLabel(status, t) : fallback}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            )}
        </Pressable>
    )
}
export default SubscriptionCard
