
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';
import CampusBackground from '@/components/CampusBackground';
import { CAMPUS } from '@/constants/colors';

// Dashboard redesign only.
// All navigation routes and functionality remain unchanged.

export default function Index() {
  return (
    <SafeAreaView style={styles.root}>
      <CampusBackground />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.topbar}>
          <View style={styles.logo}>
            <Ionicons
              name="scan"
              size={20}
              color="#FFFFFF"
            />
          </View>

          <View style={styles.topTitleWrap}>
            <Text style={styles.brand}>
              ATTEND
              <Text style={styles.brandDot}> /</Text>
            </Text>

            <Text style={styles.brandSub}>
              THE DIGITAL CAMPUS
            </Text>
          </View>

          <Pressable
            style={styles.profileIcon}
            onPress={() => router.push('/profile')}
            accessibilityLabel="Open profile"
          >
            <Ionicons
              name="person-outline"
              size={21}
              color={CAMPUS.text}
            />
          </Pressable>
        </View>

        {/* WELCOME */}
        <View style={styles.welcome}>
          <Text style={styles.kicker}>
            ✦ YOUR PERSONAL DASHBOARD
          </Text>

          <Text style={styles.heading}>
            Every moment.{"\n"}
            <Text style={styles.headingAccent}>
              Counted.
            </Text>
          </Text>

          <Text style={styles.subtitle}>
            Your all-in-one space to check in,
            stay organized, and keep your
            attendance on track.
          </Text>
        </View>

        {/* QR SCANNER CARD */}
        <Pressable
          style={styles.scanCard}
          onPress={() => router.push('/scan')}
          accessibilityRole="button"
          accessibilityLabel="Scan QR Code"
        >
          <View style={styles.cardTop}>
            <View style={styles.livePill}>
              <View style={styles.liveDot} />

              <Text style={styles.liveText}>
                YOUR NEXT CHECK-IN
              </Text>
            </View>

            <Ionicons
              name="arrow-up-outline"
              size={23}
              color="#FFFFFF"
              style={{
                transform: [{ rotate: '45deg' }],
              }}
            />
          </View>

          <View style={styles.artRow}>
            <View style={styles.cardCopy}>
              <Text style={styles.scanHeading}>
                Ready to{"\n"}show up?
              </Text>

              <Text style={styles.scanSubtitle}>
                Point your camera.
                You’re checked in.
              </Text>
            </View>

            <View style={styles.qrArt}>
              <Svg
                width="118"
                height="118"
                viewBox="0 0 118 118"
              >
                <Rect
                  x="0"
                  y="0"
                  width="118"
                  height="118"
                  rx="20"
                  fill="#FFFFFF"
                />

                <Path
                  d="M18 43V18H43M75 18H100V43M100 75V100H75M43 100H18V75"
                  fill="none"
                  stroke="#6246EA"
                  strokeWidth="8"
                  strokeLinecap="round"
                />

                <Rect
                  x="29"
                  y="29"
                  width="18"
                  height="18"
                  rx="3"
                  fill="#6246EA"
                />

                <Rect
                  x="70"
                  y="29"
                  width="18"
                  height="18"
                  rx="3"
                  fill="#6246EA"
                />

                <Rect
                  x="29"
                  y="70"
                  width="18"
                  height="18"
                  rx="3"
                  fill="#6246EA"
                />

                <Path
                  d="M63 63h12v12H63zM79 79h12v12H79zM62 84h9"
                  stroke="#6246EA"
                  strokeWidth="6"
                  fill="none"
                />
              </Svg>
            </View>
          </View>

          <View style={styles.scanAction}>
            <Ionicons
              name="scan-outline"
              size={20}
              color="#283789"
            />

            <Text style={styles.scanActionText}>
              START SCANNING
            </Text>

            <Ionicons
              name="arrow-forward"
              size={20}
              color="#283789"
            />
          </View>
        </Pressable>

        {/* EXPLORE SECTION */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>
            Explore
          </Text>

          <Text style={styles.sectionCaption}>
            YOUR WORKSPACE
          </Text>
        </View>

        <View style={styles.tileRow}>
          {/* ATTENDANCE HISTORY */}
          <Pressable
            style={[styles.tile, styles.historyTile]}
            onPress={() => router.push('/history')}
            accessibilityRole="button"
          >
            <View style={styles.tileIcon}>
              <Ionicons
                name="calendar-outline"
                size={25}
                color="#F1AF88"
              />
            </View>

            <Ionicons
              name="arrow-forward"
              size={17}
              color="#F1AF88"
              style={styles.tileArrow}
            />

            <Text style={styles.tileTitle}>
              My history
            </Text>

            <Text style={styles.tileDesc}>
              Your attendance timeline
            </Text>
          </Pressable>

          {/* PROFILE */}
          <Pressable
            style={[styles.tile, styles.profileTile]}
            onPress={() => router.push('/profile')}
            accessibilityRole="button"
          >
            <View
              style={[
                styles.tileIcon,
                { backgroundColor: '#245350' },
              ]}
            >
              <Ionicons
                name="person-outline"
                size={25}
                color="#7EE3C1"
              />
            </View>

            <Ionicons
              name="arrow-forward"
              size={17}
              color="#7EE3C1"
              style={styles.tileArrow}
            />

            <Text style={styles.tileTitle}>
              My profile
            </Text>

            <Text style={styles.tileDesc}>
              Your account, your space
            </Text>
          </Pressable>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Ionicons
            name="shield-checkmark-outline"
            size={16}
            color={CAMPUS.textMuted}
          />

          <Text style={styles.footerText}>
            Fast check-ins. Smarter attendance.
          </Text>
        </View>

        {/* DEVELOPER CREDIT */}
        <View style={styles.developerSection}>
          <View style={styles.developerDivider} />

          <Text style={styles.developerLabel}>
            DESIGNED & DEVELOPED BY
          </Text>

          <Text style={styles.developerName}>
            ELBOY ABATAYO
          </Text>

          <Text style={styles.credit}>
            QR ATTENDANCE • BUILT FOR CAMPUS
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: CAMPUS.bg,
  },

  content: {
    width: '100%',
    maxWidth: 550,
    alignSelf: 'center',
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 45,
  },

  // HEADER
  topbar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 38,
  },

  logo: {
    width: 41,
    height: 41,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5267E9',
    marginRight: 10,
  },

  topTitleWrap: {
    flex: 1,
  },

  brand: {
    fontSize: 23,
    fontWeight: '900',
    letterSpacing: -1.3,
    color: CAMPUS.text,
  },

  brandDot: {
    color: CAMPUS.accent,
  },

  brandSub: {
    fontSize: 8,
    letterSpacing: 2,
    fontWeight: '800',
    color: CAMPUS.textFaint,
    marginTop: 2,
  },

  profileIcon: {
    width: 43,
    height: 43,
    borderRadius: 15,
    backgroundColor: CAMPUS.surface,
    borderWidth: 1,
    borderColor: CAMPUS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // WELCOME
  welcome: {
    marginBottom: 26,
  },

  kicker: {
    fontSize: 10,
    fontWeight: '900',
    color: CAMPUS.accent,
    letterSpacing: 2,
    marginBottom: 13,
  },

  heading: {
    color: CAMPUS.text,
    fontWeight: '900',
    fontSize: 42,
    letterSpacing: -1.8,
    lineHeight: 49,
  },

  headingAccent: {
    color: CAMPUS.accent,
  },

  subtitle: {
    fontSize: 14,
    lineHeight: 23,
    maxWidth: 360,
    color: CAMPUS.textMuted,
    marginTop: 13,
  },

  // SCANNER CARD
  scanCard: {
    borderRadius: 29,
    padding: 21,
    backgroundColor: '#3948B9',
    borderWidth: 1,
    borderColor: '#7484E9',
    marginBottom: 31,
    overflow: 'hidden',
  },

  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  livePill: {
    backgroundColor: 'rgba(255,255,255,.17)',
    paddingHorizontal: 11,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    borderRadius: 50,
  },

  liveDot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: '#C4FFDC',
  },

  liveText: {
    fontSize: 9,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 1.25,
  },

  artRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 31,
    gap: 4,
  },

  cardCopy: {
    flex: 1,
  },

  scanHeading: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: -1,
    lineHeight: 36,
  },

  scanSubtitle: {
    color: '#CFD5FF',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 11,
    maxWidth: 155,
  },

  qrArt: {
    transform: [{ rotate: '8deg' }],
  },

  scanAction: {
    borderRadius: 15,
    backgroundColor: '#EAFDFF',
    minHeight: 53,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    gap: 11,
  },

  scanActionText: {
    color: '#283789',
    flex: 1,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1.05,
  },

  // EXPLORE SECTION
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 23,
    fontWeight: '900',
    color: CAMPUS.text,
    letterSpacing: -0.6,
  },

  sectionCaption: {
    color: CAMPUS.textFaint,
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.2,
  },

  tileRow: {
    flexDirection: 'row',
    gap: 12,
  },

  tile: {
    flex: 1,
    minHeight: 173,
    borderRadius: 23,
    padding: 15,
  },

  historyTile: {
    backgroundColor: '#1B293F',
  },

  profileTile: {
    backgroundColor: '#143B3E',
  },

  tileIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#3B304D',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tileArrow: {
    position: 'absolute',
    top: 21,
    right: 17,
  },

  tileTitle: {
    color: '#F4F8FF',
    fontSize: 16,
    fontWeight: '900',
    marginTop: 24,
  },

  tileDesc: {
    color: CAMPUS.textMuted,
    fontSize: 11,
    lineHeight: 17,
    marginTop: 5,
  },

  // FOOTER
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 29,
  },

  footerText: {
    color: CAMPUS.textMuted,
    fontSize: 11,
  },

  // DEVELOPER CREDIT
  developerSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    paddingTop: 18,
    paddingBottom: 10,
  },

  developerDivider: {
    width: 55,
    height: 2,
    backgroundColor: CAMPUS.accent,
    borderRadius: 10,
    marginBottom: 18,
    opacity: 0.7,
  },

  developerLabel: {
    fontSize: 9,
    fontWeight: '700',
    color: CAMPUS.textMuted,
    letterSpacing: 2,
    marginBottom: 7,
    textAlign: 'center',
  },

  developerName: {
    fontSize: 15,
    fontWeight: '900',
    color: CAMPUS.accent,
    letterSpacing: 2,
    textAlign: 'center',
  },

  credit: {
    marginTop: 14,
    textAlign: 'center',
    color: CAMPUS.textFaint,
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 1.1,
  },
});
