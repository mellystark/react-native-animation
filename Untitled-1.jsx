
//#region importlar
import React, {useRef, useEffect} from 'react';
import {Animated, Text, View} from 'react-native';
//#endregion

//#region timing
Animated.timing(
    value, // Değiştirilecek değer
    {
      toValue: 0, // Değerin son hedefi
      duration: 500, // Animasyonun süresi (milisaniye cinsinden)
      easing: Easing.linear // Animasyonun nasıl hızlanıp yavaşlayacağı
    }
  ).start();
//#endregion

//#region sequence
Animated.sequence([
    animation1,
    animation2,
    animation3,
    // ... diğer animasyonlar
  ]).start();
  //#endregion

  //#region decay
  Animated.decay(
    value, // Değer
    {
      velocity: 0.1, // Başlangıç hızı
      deceleration: 0.997, // Yavaşlama hızı
    }
  ).start();
  //#endregion

//#region parallel
  Animated.parallel([
    animation1,
    animation2,
    animation3,
    // ... diğer animasyonlar
  ]).start();
  //#endregion

//#region spring
  Animated.spring(
    animatedValue, // Hareket ettirilecek animasyonlu değer
    {
      toValue: targetValue, // Hedef değer
      friction: frictionValue, // Sürtünme (direnç) katsayısı (opsiyonel)
      tension: tensionValue // Gerilim katsayısı (opsiyonel)
    }
  ).start();
  //#endregion

//#region delay
  Animated.delay(500).start(() => {
    animation.start();
  });
  //#endregion

//#region stagger
  // Animasyonları sırayla ve gecikmeli olarak başlat
Animated.stagger(200, [animation1, animation2]).start();
//#endregion

//#region add
const animatedValue1 = new Animated.Value(1);
const animatedValue2 = new Animated.Value(2);

const sum = Animated.add(animatedValue1, animatedValue2);

// İlk değer 1 olan animasyonlu değeri 3 yapacak bir animasyon başlatılıyor
Animated.timing(animatedValue1, {
  toValue: 3,
  duration: 1000,
}).start();

// İkinci değer 2 olan animasyonlu değeri 5 yapacak bir animasyon başlatılıyor
Animated.timing(animatedValue2, {
  toValue: 5,
  duration: 1000,
}).start();
//#endregion

//#region subtract
const animatedValue1_ = new Animated.Value(5);
const animatedValue2_ = new Animated.Value(2);

const difference = Animated.subtract(animatedValue1, animatedValue2);

// İlk değer 5 olan animasyonlu değeri 3 yapacak bir animasyon başlatılıyor
Animated.timing(animatedValue1_, {
  toValue: 3,
  duration: 1000,
}).start();

// İkinci değer 2 olan animasyonlu değeri 4 yapacak bir animasyon başlatılıyor
Animated.timing(animatedValue2_, {
  toValue: 4,
  duration: 1000,
}).start();
//#endregion

//#region divide
const animatedValue_1 = new Animated.Value(10);
const animatedValue_2 = new Animated.Value(2);

const division = Animated.divide(animatedValue1, animatedValue2);

// İlk değer 10 olan animasyonlu değeri 20 yapacak bir animasyon başlatılıyor
Animated.timing(animatedValue_1, {
  toValue: 20,
  duration: 1000,
}).start();

// İkinci değer 2 olan animasyonlu değeri 4 yapacak bir animasyon başlatılıyor
Animated.timing(animatedValue_2, {
  toValue: 4,
  duration: 1000,
}).start();
//#endregion

//#region modulo
const animatedValue = new Animated.Value(10);
const modulus = new Animated.Value(3);

const result = Animated.modulo(animatedValue, modulus);

// İlk değer 10 olan animasyonlu değeri 20 yapacak bir animasyon başlatılıyor
Animated.timing(animatedValue, {
  toValue: 20,
  duration: 1000,
}).start();

// İkinci değer 3 olan animasyonlu değeri 5 yapacak bir animasyon başlatılıyor
Animated.timing(modulus, {
  toValue: 5,
  duration: 1000,
}).start();
//#endregion

//#region multiply
const animatedValue11 = new Animated.Value(2);
const animatedValue12 = new Animated.Value(3);

const product = Animated.multiply(animatedValue1, animatedValue2);

// İlk değer 2 olan animasyonlu değeri 5 yapacak bir animasyon başlatılıyor
Animated.timing(animatedValue11, {
  toValue: 5,
  duration: 1000,
}).start();

// İkinci değer 3 olan animasyonlu değeri 4 yapacak bir animasyon başlatılıyor
Animated.timing(animatedValue12, {
  toValue: 4,
  duration: 1000,
}).start();
//#endregion

//#region interpolation
const animatedValue_ = new Animated.Value(0);

const interpolatedValue = animatedValue_.interpolate({
  inputRange: [0, 1],
  outputRange: [0, 100],
});
//#endregion

//#region event
import { Animated, View, PanResponder } from 'react-native';

class DraggableBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(),
    };
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.pan.x, dy: this.state.pan.y },
      ]),
      onPanResponderRelease: () => {
        Animated.spring(this.state.pan, { toValue: { x: 0, y: 0 } }).start();
      },
    });
  }

  render() {
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[this.state.pan.getLayout(), styles.box]}
      />
    );
  }
}
//#endregion

//#region compenent
<Animatable.Text animation="fadeIn" duration={2000}>
        Merhaba, Animasyonlu Metin!
      </Animatable.Text>
//#endregion

//#region layout
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation } from 'react-native';

const App = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setExpanded(!expanded);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={toggleExpanded}>
        <Text>Toggle</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={{ width: 200, height: 200, backgroundColor: 'red' }}>
          <Text>Expanded View</Text>
        </View>
      )}
    </View>
  );
};

export default App;
//#endregion