import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={require('./assets/paul.jpg')}
          style={styles.avatar}
        />
        <Text style={styles.name}>Paul Benedict G. Unigo</Text>
        <Text style={styles.title}>Game Developer</Text>
        <Text style={styles.objective}>
          "Great developers code alike, think alike."
        </Text>
      </View>

      {/* Contact Info */}
      <Section title="Contact Information">
        <Text>Email: s2024101403@firstasia.edu.ph</Text>
        <Text>Phone: +63 912 345 6789</Text>
      </Section>

      {/* Personal Info */}
      <Section title="Personal Information">
        <Text>Date of Birth: July 19, 2005</Text>
        <Text>Gender: Male</Text>
        <Text>Address: Bagumbayan, Tanauan City, Kaisahan Village, Philippines</Text>
      </Section>

      {/* Education */}
      <Section title="Education">
        <Text>Bachelor of Science in Information technology</Text>
        <Text>FAITH Colleges – 2020</Text>
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <Text>• JavaScript development</Text>
        <Text>• Backend / Frontend</Text>
        <Text>• Node.js</Text>
        <Text>• Phyton development</Text>
      </Section>

      {/* Work Experience */}
      <Section title="Work Experience">
        <Text>Software Developer – RIZZMA Corp (2067)</Text>
        <Text>• Developed and maintained mobile games applications</Text>
        <Text>• Collaborated with cross-functional Multi-sigma teams</Text>
      </Section>

      {/* Achievements */}
      <Section title="Achievements">
        <Text>• Employee of the Year – 2026</Text>
      </Section>

      {/* Projects */}
      <Section title="Projects">
        <Text>• Gooning Routine Manager App (React Native)</Text>
        <Text>• E-commerce Website (React, Node.js)</Text>
      </Section>

      {/* Volunteer */}
      <Section title="Volunteer Experience">
        <Text>• School Coding Teacher</Text>
      </Section>

      {/* Hobbies */}
      <Section title="Hobbies & Interests">
        <Text>• Working Out at the GYM</Text>
        <Text>• Gaming</Text>
        <Text>• Beating My meat</Text>
      </Section>

      {/* Languages */}
      <Section title="Languages Spoken">
        <Text>• English</Text>
        <Text>• Filipino</Text>
        <Text>• Japanese</Text>
        <Text>• Brain Rot</Text>
      </Section>

      {/* Certifications */}
      <Section title="Certifications">
        <Text>• Certifications of God Coder</Text>
      </Section>

      {/* Social Links */}
      <Section title="Social Media Links">
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/PaulUnigo/PaulUnigo_WS')}> 
          <Text style={styles.link}>GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/paulbenedict.unigo.52/')}> 
          <Text style={styles.link}>FaceBook</Text>
        </TouchableOpacity>
      </Section>
    </ScrollView>
  );
}

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4ffe1',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    color: '#666',
  },
  objective: {
    textAlign: 'center',
    marginTop: 8,
    color: '#444',
  },
  section: {
    backgroundColor: '#a4fae5',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  link: {
    color: '#1e90ff',
    marginTop: 4,
  },
});
