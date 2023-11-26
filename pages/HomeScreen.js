import { useState, useEffect } from "react";
import {View,Text,StyleSheet,Image,Alert,SafeAreaView, ScrollView} from "react-native";
import axios from "axios";
import Header from "../components/Header";

function HomeScreen() {
  const [top, setTop] = useState([]);
  const [airing, setAiring] = useState([]);

  useEffect(() => {
    async function fetchTop() {
      try {
        const response = await axios.get(
          "https://api.jikan.moe/v4/top/anime"
        );
        setTop(response.data.data);
      } catch (error) {
        // Alert.alert("Gagal!", error.message);
      }
    }
    fetchTop();
  },);

  useEffect(() => {
    async function fetchAiring() {
      try {
        const response = await axios.get(
          "https://api.jikan.moe/v4/top/anime?filter=airing"
        );
        setAiring(response.data.data);
      } catch (error) {
        // Alert.alert("Gagal!", error.message);
      }
    }
    fetchAiring();
  },);

  const CardAiring = ({ item }) => {
    return (
      <View
        style={{
          paddingHorizontal: 2,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderWidth: 2,
            borderRadius: 8,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            width: 130,
            height: 196
          }}
        >
          <Image
            source={{ uri: item.images.jpg.image_url }}
            style={{
              width: 126,
              height: 168,
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,          
            }}
          />
          <View
           style={styles.pill}
            >
          <Text
              style={{
                fontSize: 10,
                color: "white",
              }}
            >
              {'  ⭐ ' + item.score}
            </Text>
          </View>
        
            <Text
            numberOfLines={1}
              style={{
                fontSize: 14,
                fontWeight: 'bold',
              }}
            >
              {item.title}
            </Text>
        </View>
      </View>
    );
  };

  const CardTop = ({ item }) => {
    return (
      <View
        style={{
          paddingVertical: 3,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderWidth: 2,
            borderRadius: 8,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: 360,
          }}
        >
          <Image
            source={{ uri: item.images.jpg.image_url }}
            style={{
              width: 100,
              height: 100,
              borderRightWidth: 2,
              borderBottomLeftRadius: 6,
              borderTopLeftRadius: 6,
              borderColor: "black",
            }}
          />
          <View
            style={{
              flexDirection: "column",
              marginLeft: 16,
              justifyContent: "center",
              maxWidth: 180,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                fontWeight: "400",
                color: "gray",
              }}
            >
              {"Score: " + item.score}
            </Text>
          </View>
        </View>
      </View>
    );
  };  

  return (
    <SafeAreaView 
      style={styles.container}
        flexDirection= "column">
      <Header
        headerIcon={"bell-o"}
        headerText={"Kelompok 09"}
        flexPosition={"flex-start"}
      />
      <Text style={{
        fontSize: 20,
        textAlign: "center",
        }}>{"TOP AIRING"}</Text>
      <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          <ScrollView horizontal>
            {airing.map((item) => (
              <CardAiring item={item}/>))}
          </ScrollView>
      </View>
      <Text style={{
        fontSize: 20,
        textAlign: "center",
        }}>{"TOP ANIME OF ALL TIME"}</Text>
      <View
            style={{
              flex: 0.85,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          <ScrollView>
            {top.map((item) => (
              <CardTop item={item}/>))}
          </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  pill: {
    marginTop: 10,
    marginLeft: 4,
    alignSelf: 'flex-start',
    justifyContent:'center',
    width:45,
    height:24,
    backgroundColor:'rgba(128, 128, 128, 0.6)',
    borderRadius:30,
    position: "absolute"
  }
});

export default HomeScreen;