import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import JobCard from '../components/JobCard';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const featuredJobs = [
    { id: 1, title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana' },
    // Add more featured jobs
  ];

  const popularJobs = [
    { id: 1, title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US' },
    // Add more popular jobs
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Welcome, {name} ({email})</Text>
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      {featuredJobs.map(job => <JobCard key={job.id} job={job} />)}
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      {popularJobs.map(job => <JobCard key={job.id} job={job} />)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
});

export default HomeScreen;