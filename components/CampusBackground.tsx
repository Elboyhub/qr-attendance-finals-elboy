import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Path, Rect, Stop } from 'react-native-svg';
import { CAMPUS } from '@/constants/colors';

// Decorative only: behind controls, and never handles touches.
export default function CampusBackground() {
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <Svg width="100%" height="100%" preserveAspectRatio="xMidYMin slice" viewBox="0 0 390 850">
        <Defs>
          <LinearGradient id="night" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#0A1328" />
            <Stop offset="0.55" stopColor={CAMPUS.bg} />
            <Stop offset="1" stopColor="#081626" />
          </LinearGradient>
        </Defs>
        <Rect width="390" height="850" fill="url(#night)" />
        <Circle cx="370" cy="38" r="184" fill="#243D70" opacity="0.34" />
        <Circle cx="380" cy="5" r="114" fill="#5262E4" opacity="0.11" />
        <Circle cx="-46" cy="650" r="173" fill="#1B706C" opacity="0.13" />
        <Path d="M205 0L390 185M244 0L390 146M283 0L390 107M322 0L390 68" stroke="#7391CD" strokeWidth="0.8" opacity="0.16" />
        <Path d="M0 610L135 745M0 650L118 768M0 690L89 780" stroke="#6CE9D6" strokeWidth="0.7" opacity="0.11" />
      </Svg>
    </View>
  );
}
