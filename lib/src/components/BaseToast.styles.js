import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from "react-native-safearea-height";


export const HEIGHT = 60;
export const WIDTH = 340;
export const BORDER_RADIUS = 6;
export const styles = StyleSheet.create({
    base: {
        flexDirection: 'row',
        marginTop:getStatusBarHeight(true),
        width: '100%',
        borderRadius: 2,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: BORDER_RADIUS,
        elevation: 2,
        
        paddingVertical:8
    },
    leadingBorder: {
        borderLeftWidth: 0,
        borderLeftColor: '#D8D8D8'
    },
    contentContainer: {
        paddingHorizontal: 25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start' // In case of RTL, the text will start from the right
    },
    text1: {
        fontSize: 16,
        fontFamily:"Inter-SemiBold",
        fontWeight: 'bold',
        marginBottom: 2,
        color: '#fff',
        width: '100%' // Fixes: https://github.com/calintamas/react-native-toast-message/issues/130
    },
    text2: {
        fontFamily:"Inter-Medium",
        fontSize: 12,
        color: '#fff',
        width: '100%' // Fixes: https://github.com/calintamas/react-native-toast-message/issues/130
    }
});
