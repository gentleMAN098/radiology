import {View, Text, TouchableOpacity} from 'react-native'
import { useI18n } from "@/i18n/I18nProvider";

const ListHeading = ({ title }: ListHeadingProps) => {
    const { direction, t } = useI18n();
    const textDirection = { direction, writingDirection: direction } as const;

    return (
        <View className="list-head">
            <Text className="list-title" style={textDirection}>{title}</Text>

            <TouchableOpacity className="list-action">
                <Text className="list-action-text" style={textDirection}>{t('common.viewAll')}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ListHeading
