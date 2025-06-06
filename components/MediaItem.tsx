import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function MediaItem({ item, type }: any) {
  const router = useRouter();
  const imageUrl = item.poster_path ? `https://image.tmdb.org/t/p/w200${item.poster_path}` : null;

  return (
    <View style={styles.card}>
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title || item.name}</Text>
        <Button title="More Details" onPress={() => router.push(`/details/${item.id}?type=${type}`)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
});