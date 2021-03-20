import styled, { keyframes } from "styled-components";

const sphere = keyframes`
  0% {
    transform: scale(0) rotateZ(45deg);
 }
  50% {
    transform: scale(0) rotateZ(45deg);
 }
  100% {
    transform: scale(1) rotateZ(45deg);
 }
`;

const color = keyframes`
  0% {
    border-color: #FFFFFF;
 }
  50% {
    border-color: #FFFFFF;
 }
  100% {
    border-color: #FFFFFF;
 }
`;

export const HeroContainer = styled.div`
  width: 50%;
  position: absolute;
  top: 0;
  right: 0;

  .container {
    position: relative;
    display: grid;
    grid-template-rows: repeat(20, 5vh);
    grid-template-columns: repeat(20, 5vw);
    transform-style: preserve-3d;
  }

  .monitor {
    position: absolute;
    top: 0;
    right: 100px;
    width: 40%;
    height: 100%;
    pointer-events: none;
    transform-style: preserve-3d;
  }

  .trigger:active ~ .monitor .vr_layer_item {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .trigger:nth-child(1):hover ~ .monitor .camera.o-y {
    transform: rotateY(72deg);
  }
  .trigger:nth-child(1):hover ~ .monitor .camera.o-x {
    transform: rotateX(-72deg);
  }
  .trigger:nth-child(2):hover ~ .monitor .camera.o-y {
    transform: rotateY(64deg);
  }
  .trigger:nth-child(2):hover ~ .monitor .camera.o-x {
    transform: rotateX(-72deg);
  }
  .trigger:nth-child(3):hover ~ .monitor .camera.o-y {
    transform: rotateY(56deg);
  }
  .trigger:nth-child(3):hover ~ .monitor .camera.o-x {
    transform: rotateX(-72deg);
  }
  .trigger:nth-child(4):hover ~ .monitor .camera.o-y {
    transform: rotateY(48deg);
  }
  .trigger:nth-child(4):hover ~ .monitor .camera.o-x {
    transform: rotateX(-72deg);
  }
  .trigger:nth-child(5):hover ~ .monitor .camera.o-y {
    transform: rotateY(40deg);
  }
  .trigger:nth-child(5):hover ~ .monitor .camera.o-x {
    transform: rotateX(-72deg);
  }
  .trigger:nth-child(6):hover ~ .monitor .camera.o-y {
    transform: rotateY(32deg);
  }
  .trigger:nth-child(6):hover ~ .monitor .camera.o-x {
    transform: rotateX(-72deg);
  }
  .trigger:nth-child(7):hover ~ .monitor .camera.o-y {
    transform: rotateY(24deg);
  }
  .trigger:nth-child(7):hover ~ .monitor .camera.o-x {
    transform: rotateX(-72deg);
  }
  .trigger:nth-child(8):hover ~ .monitor .camera.o-y {
    transform: rotateY(16deg);
  }
  .trigger:nth-child(8):hover ~ .monitor .camera.o-x {
    transform: rotateX(-72deg);
  }
  .trigger:nth-child(9):hover ~ .monitor .camera.o-y {
    transform: rotateY(8deg);
  }
  .trigger:nth-child(9):hover ~ .monitor .camera.o-x {
    transform: rotateX(-72deg);
  }
  .trigger:nth-child(10):hover ~ .monitor .camera.o-y {
    transform: rotateY(0deg);
  }
  .trigger:nth-child(10):hover ~ .monitor .camera.o-x {
    transform: rotateX(-72deg);
  }
  .trigger:nth-child(11):hover ~ .monitor .camera.o-y {
    transform: rotateY(-8deg);
  }
  .trigger:nth-child(11):hover ~ .monitor .camera.o-x {
    transform: rotateX(-72deg);
  }
  .trigger:nth-child(12):hover ~ .monitor .camera.o-y {
    transform: rotateY(-16deg);
  }
  .trigger:nth-child(12):hover ~ .monitor .camera.o-x {
    transform: rotateX(-72deg);
  }
  .trigger:nth-child(13):hover ~ .monitor .camera.o-y {
    transform: rotateY(-24deg);
  }
  .trigger:nth-child(13):hover ~ .monitor .camera.o-x {
    transform: rotateX(-72deg);
  }
  .trigger:nth-child(14):hover ~ .monitor .camera.o-y {
    transform: rotateY(-32deg);
  }
  .trigger:nth-child(14):hover ~ .monitor .camera.o-x {
    transform: rotateX(-72deg);
  }
  .trigger:nth-child(15):hover ~ .monitor .camera.o-y {
    transform: rotateY(-40deg);
  }
  .trigger:nth-child(15):hover ~ .monitor .camera.o-x {
    transform: rotateX(-72deg);
  }
  .trigger:nth-child(16):hover ~ .monitor .camera.o-y {
    transform: rotateY(-48deg);
  }
  .trigger:nth-child(16):hover ~ .monitor .camera.o-x {
    transform: rotateX(-72deg);
  }
  .trigger:nth-child(17):hover ~ .monitor .camera.o-y {
    transform: rotateY(-56deg);
  }
  .trigger:nth-child(17):hover ~ .monitor .camera.o-x {
    transform: rotateX(-72deg);
  }
  .trigger:nth-child(18):hover ~ .monitor .camera.o-y {
    transform: rotateY(-64deg);
  }
  .trigger:nth-child(18):hover ~ .monitor .camera.o-x {
    transform: rotateX(-72deg);
  }
  .trigger:nth-child(19):hover ~ .monitor .camera.o-y {
    transform: rotateY(-72deg);
  }
  .trigger:nth-child(19):hover ~ .monitor .camera.o-x {
    transform: rotateX(-72deg);
  }
  .trigger:nth-child(20):hover ~ .monitor .camera.o-y {
    transform: rotateY(-80deg);
  }
  .trigger:nth-child(20):hover ~ .monitor .camera.o-x {
    transform: rotateX(-72deg);
  }
  .trigger:nth-child(21):hover ~ .monitor .camera.o-y {
    transform: rotateY(72deg);
  }
  .trigger:nth-child(21):hover ~ .monitor .camera.o-x {
    transform: rotateX(-64deg);
  }
  .trigger:nth-child(22):hover ~ .monitor .camera.o-y {
    transform: rotateY(64deg);
  }
  .trigger:nth-child(22):hover ~ .monitor .camera.o-x {
    transform: rotateX(-64deg);
  }
  .trigger:nth-child(23):hover ~ .monitor .camera.o-y {
    transform: rotateY(56deg);
  }
  .trigger:nth-child(23):hover ~ .monitor .camera.o-x {
    transform: rotateX(-64deg);
  }
  .trigger:nth-child(24):hover ~ .monitor .camera.o-y {
    transform: rotateY(48deg);
  }
  .trigger:nth-child(24):hover ~ .monitor .camera.o-x {
    transform: rotateX(-64deg);
  }
  .trigger:nth-child(25):hover ~ .monitor .camera.o-y {
    transform: rotateY(40deg);
  }
  .trigger:nth-child(25):hover ~ .monitor .camera.o-x {
    transform: rotateX(-64deg);
  }
  .trigger:nth-child(26):hover ~ .monitor .camera.o-y {
    transform: rotateY(32deg);
  }
  .trigger:nth-child(26):hover ~ .monitor .camera.o-x {
    transform: rotateX(-64deg);
  }
  .trigger:nth-child(27):hover ~ .monitor .camera.o-y {
    transform: rotateY(24deg);
  }
  .trigger:nth-child(27):hover ~ .monitor .camera.o-x {
    transform: rotateX(-64deg);
  }
  .trigger:nth-child(28):hover ~ .monitor .camera.o-y {
    transform: rotateY(16deg);
  }
  .trigger:nth-child(28):hover ~ .monitor .camera.o-x {
    transform: rotateX(-64deg);
  }
  .trigger:nth-child(29):hover ~ .monitor .camera.o-y {
    transform: rotateY(8deg);
  }
  .trigger:nth-child(29):hover ~ .monitor .camera.o-x {
    transform: rotateX(-64deg);
  }
  .trigger:nth-child(30):hover ~ .monitor .camera.o-y {
    transform: rotateY(0deg);
  }
  .trigger:nth-child(30):hover ~ .monitor .camera.o-x {
    transform: rotateX(-64deg);
  }
  .trigger:nth-child(31):hover ~ .monitor .camera.o-y {
    transform: rotateY(-8deg);
  }
  .trigger:nth-child(31):hover ~ .monitor .camera.o-x {
    transform: rotateX(-64deg);
  }
  .trigger:nth-child(32):hover ~ .monitor .camera.o-y {
    transform: rotateY(-16deg);
  }
  .trigger:nth-child(32):hover ~ .monitor .camera.o-x {
    transform: rotateX(-64deg);
  }
  .trigger:nth-child(33):hover ~ .monitor .camera.o-y {
    transform: rotateY(-24deg);
  }
  .trigger:nth-child(33):hover ~ .monitor .camera.o-x {
    transform: rotateX(-64deg);
  }
  .trigger:nth-child(34):hover ~ .monitor .camera.o-y {
    transform: rotateY(-32deg);
  }
  .trigger:nth-child(34):hover ~ .monitor .camera.o-x {
    transform: rotateX(-64deg);
  }
  .trigger:nth-child(35):hover ~ .monitor .camera.o-y {
    transform: rotateY(-40deg);
  }
  .trigger:nth-child(35):hover ~ .monitor .camera.o-x {
    transform: rotateX(-64deg);
  }
  .trigger:nth-child(36):hover ~ .monitor .camera.o-y {
    transform: rotateY(-48deg);
  }
  .trigger:nth-child(36):hover ~ .monitor .camera.o-x {
    transform: rotateX(-64deg);
  }
  .trigger:nth-child(37):hover ~ .monitor .camera.o-y {
    transform: rotateY(-56deg);
  }
  .trigger:nth-child(37):hover ~ .monitor .camera.o-x {
    transform: rotateX(-64deg);
  }
  .trigger:nth-child(38):hover ~ .monitor .camera.o-y {
    transform: rotateY(-64deg);
  }
  .trigger:nth-child(38):hover ~ .monitor .camera.o-x {
    transform: rotateX(-64deg);
  }
  .trigger:nth-child(39):hover ~ .monitor .camera.o-y {
    transform: rotateY(-72deg);
  }
  .trigger:nth-child(39):hover ~ .monitor .camera.o-x {
    transform: rotateX(-64deg);
  }
  .trigger:nth-child(40):hover ~ .monitor .camera.o-y {
    transform: rotateY(-80deg);
  }
  .trigger:nth-child(40):hover ~ .monitor .camera.o-x {
    transform: rotateX(-64deg);
  }
  .trigger:nth-child(41):hover ~ .monitor .camera.o-y {
    transform: rotateY(72deg);
  }
  .trigger:nth-child(41):hover ~ .monitor .camera.o-x {
    transform: rotateX(-56deg);
  }
  .trigger:nth-child(42):hover ~ .monitor .camera.o-y {
    transform: rotateY(64deg);
  }
  .trigger:nth-child(42):hover ~ .monitor .camera.o-x {
    transform: rotateX(-56deg);
  }
  .trigger:nth-child(43):hover ~ .monitor .camera.o-y {
    transform: rotateY(56deg);
  }
  .trigger:nth-child(43):hover ~ .monitor .camera.o-x {
    transform: rotateX(-56deg);
  }
  .trigger:nth-child(44):hover ~ .monitor .camera.o-y {
    transform: rotateY(48deg);
  }
  .trigger:nth-child(44):hover ~ .monitor .camera.o-x {
    transform: rotateX(-56deg);
  }
  .trigger:nth-child(45):hover ~ .monitor .camera.o-y {
    transform: rotateY(40deg);
  }
  .trigger:nth-child(45):hover ~ .monitor .camera.o-x {
    transform: rotateX(-56deg);
  }
  .trigger:nth-child(46):hover ~ .monitor .camera.o-y {
    transform: rotateY(32deg);
  }
  .trigger:nth-child(46):hover ~ .monitor .camera.o-x {
    transform: rotateX(-56deg);
  }
  .trigger:nth-child(47):hover ~ .monitor .camera.o-y {
    transform: rotateY(24deg);
  }
  .trigger:nth-child(47):hover ~ .monitor .camera.o-x {
    transform: rotateX(-56deg);
  }
  .trigger:nth-child(48):hover ~ .monitor .camera.o-y {
    transform: rotateY(16deg);
  }
  .trigger:nth-child(48):hover ~ .monitor .camera.o-x {
    transform: rotateX(-56deg);
  }
  .trigger:nth-child(49):hover ~ .monitor .camera.o-y {
    transform: rotateY(8deg);
  }
  .trigger:nth-child(49):hover ~ .monitor .camera.o-x {
    transform: rotateX(-56deg);
  }
  .trigger:nth-child(50):hover ~ .monitor .camera.o-y {
    transform: rotateY(0deg);
  }
  .trigger:nth-child(50):hover ~ .monitor .camera.o-x {
    transform: rotateX(-56deg);
  }
  .trigger:nth-child(51):hover ~ .monitor .camera.o-y {
    transform: rotateY(-8deg);
  }
  .trigger:nth-child(51):hover ~ .monitor .camera.o-x {
    transform: rotateX(-56deg);
  }
  .trigger:nth-child(52):hover ~ .monitor .camera.o-y {
    transform: rotateY(-16deg);
  }
  .trigger:nth-child(52):hover ~ .monitor .camera.o-x {
    transform: rotateX(-56deg);
  }
  .trigger:nth-child(53):hover ~ .monitor .camera.o-y {
    transform: rotateY(-24deg);
  }
  .trigger:nth-child(53):hover ~ .monitor .camera.o-x {
    transform: rotateX(-56deg);
  }
  .trigger:nth-child(54):hover ~ .monitor .camera.o-y {
    transform: rotateY(-32deg);
  }
  .trigger:nth-child(54):hover ~ .monitor .camera.o-x {
    transform: rotateX(-56deg);
  }
  .trigger:nth-child(55):hover ~ .monitor .camera.o-y {
    transform: rotateY(-40deg);
  }
  .trigger:nth-child(55):hover ~ .monitor .camera.o-x {
    transform: rotateX(-56deg);
  }
  .trigger:nth-child(56):hover ~ .monitor .camera.o-y {
    transform: rotateY(-48deg);
  }
  .trigger:nth-child(56):hover ~ .monitor .camera.o-x {
    transform: rotateX(-56deg);
  }
  .trigger:nth-child(57):hover ~ .monitor .camera.o-y {
    transform: rotateY(-56deg);
  }
  .trigger:nth-child(57):hover ~ .monitor .camera.o-x {
    transform: rotateX(-56deg);
  }
  .trigger:nth-child(58):hover ~ .monitor .camera.o-y {
    transform: rotateY(-64deg);
  }
  .trigger:nth-child(58):hover ~ .monitor .camera.o-x {
    transform: rotateX(-56deg);
  }
  .trigger:nth-child(59):hover ~ .monitor .camera.o-y {
    transform: rotateY(-72deg);
  }
  .trigger:nth-child(59):hover ~ .monitor .camera.o-x {
    transform: rotateX(-56deg);
  }
  .trigger:nth-child(60):hover ~ .monitor .camera.o-y {
    transform: rotateY(-80deg);
  }
  .trigger:nth-child(60):hover ~ .monitor .camera.o-x {
    transform: rotateX(-56deg);
  }
  .trigger:nth-child(61):hover ~ .monitor .camera.o-y {
    transform: rotateY(72deg);
  }
  .trigger:nth-child(61):hover ~ .monitor .camera.o-x {
    transform: rotateX(-48deg);
  }
  .trigger:nth-child(62):hover ~ .monitor .camera.o-y {
    transform: rotateY(64deg);
  }
  .trigger:nth-child(62):hover ~ .monitor .camera.o-x {
    transform: rotateX(-48deg);
  }
  .trigger:nth-child(63):hover ~ .monitor .camera.o-y {
    transform: rotateY(56deg);
  }
  .trigger:nth-child(63):hover ~ .monitor .camera.o-x {
    transform: rotateX(-48deg);
  }
  .trigger:nth-child(64):hover ~ .monitor .camera.o-y {
    transform: rotateY(48deg);
  }
  .trigger:nth-child(64):hover ~ .monitor .camera.o-x {
    transform: rotateX(-48deg);
  }
  .trigger:nth-child(65):hover ~ .monitor .camera.o-y {
    transform: rotateY(40deg);
  }
  .trigger:nth-child(65):hover ~ .monitor .camera.o-x {
    transform: rotateX(-48deg);
  }
  .trigger:nth-child(66):hover ~ .monitor .camera.o-y {
    transform: rotateY(32deg);
  }
  .trigger:nth-child(66):hover ~ .monitor .camera.o-x {
    transform: rotateX(-48deg);
  }
  .trigger:nth-child(67):hover ~ .monitor .camera.o-y {
    transform: rotateY(24deg);
  }
  .trigger:nth-child(67):hover ~ .monitor .camera.o-x {
    transform: rotateX(-48deg);
  }
  .trigger:nth-child(68):hover ~ .monitor .camera.o-y {
    transform: rotateY(16deg);
  }
  .trigger:nth-child(68):hover ~ .monitor .camera.o-x {
    transform: rotateX(-48deg);
  }
  .trigger:nth-child(69):hover ~ .monitor .camera.o-y {
    transform: rotateY(8deg);
  }
  .trigger:nth-child(69):hover ~ .monitor .camera.o-x {
    transform: rotateX(-48deg);
  }
  .trigger:nth-child(70):hover ~ .monitor .camera.o-y {
    transform: rotateY(0deg);
  }
  .trigger:nth-child(70):hover ~ .monitor .camera.o-x {
    transform: rotateX(-48deg);
  }
  .trigger:nth-child(71):hover ~ .monitor .camera.o-y {
    transform: rotateY(-8deg);
  }
  .trigger:nth-child(71):hover ~ .monitor .camera.o-x {
    transform: rotateX(-48deg);
  }
  .trigger:nth-child(72):hover ~ .monitor .camera.o-y {
    transform: rotateY(-16deg);
  }
  .trigger:nth-child(72):hover ~ .monitor .camera.o-x {
    transform: rotateX(-48deg);
  }
  .trigger:nth-child(73):hover ~ .monitor .camera.o-y {
    transform: rotateY(-24deg);
  }
  .trigger:nth-child(73):hover ~ .monitor .camera.o-x {
    transform: rotateX(-48deg);
  }
  .trigger:nth-child(74):hover ~ .monitor .camera.o-y {
    transform: rotateY(-32deg);
  }
  .trigger:nth-child(74):hover ~ .monitor .camera.o-x {
    transform: rotateX(-48deg);
  }
  .trigger:nth-child(75):hover ~ .monitor .camera.o-y {
    transform: rotateY(-40deg);
  }
  .trigger:nth-child(75):hover ~ .monitor .camera.o-x {
    transform: rotateX(-48deg);
  }
  .trigger:nth-child(76):hover ~ .monitor .camera.o-y {
    transform: rotateY(-48deg);
  }
  .trigger:nth-child(76):hover ~ .monitor .camera.o-x {
    transform: rotateX(-48deg);
  }
  .trigger:nth-child(77):hover ~ .monitor .camera.o-y {
    transform: rotateY(-56deg);
  }
  .trigger:nth-child(77):hover ~ .monitor .camera.o-x {
    transform: rotateX(-48deg);
  }
  .trigger:nth-child(78):hover ~ .monitor .camera.o-y {
    transform: rotateY(-64deg);
  }
  .trigger:nth-child(78):hover ~ .monitor .camera.o-x {
    transform: rotateX(-48deg);
  }
  .trigger:nth-child(79):hover ~ .monitor .camera.o-y {
    transform: rotateY(-72deg);
  }
  .trigger:nth-child(79):hover ~ .monitor .camera.o-x {
    transform: rotateX(-48deg);
  }
  .trigger:nth-child(80):hover ~ .monitor .camera.o-y {
    transform: rotateY(-80deg);
  }
  .trigger:nth-child(80):hover ~ .monitor .camera.o-x {
    transform: rotateX(-48deg);
  }
  .trigger:nth-child(81):hover ~ .monitor .camera.o-y {
    transform: rotateY(72deg);
  }
  .trigger:nth-child(81):hover ~ .monitor .camera.o-x {
    transform: rotateX(-40deg);
  }
  .trigger:nth-child(82):hover ~ .monitor .camera.o-y {
    transform: rotateY(64deg);
  }
  .trigger:nth-child(82):hover ~ .monitor .camera.o-x {
    transform: rotateX(-40deg);
  }
  .trigger:nth-child(83):hover ~ .monitor .camera.o-y {
    transform: rotateY(56deg);
  }
  .trigger:nth-child(83):hover ~ .monitor .camera.o-x {
    transform: rotateX(-40deg);
  }
  .trigger:nth-child(84):hover ~ .monitor .camera.o-y {
    transform: rotateY(48deg);
  }
  .trigger:nth-child(84):hover ~ .monitor .camera.o-x {
    transform: rotateX(-40deg);
  }
  .trigger:nth-child(85):hover ~ .monitor .camera.o-y {
    transform: rotateY(40deg);
  }
  .trigger:nth-child(85):hover ~ .monitor .camera.o-x {
    transform: rotateX(-40deg);
  }
  .trigger:nth-child(86):hover ~ .monitor .camera.o-y {
    transform: rotateY(32deg);
  }
  .trigger:nth-child(86):hover ~ .monitor .camera.o-x {
    transform: rotateX(-40deg);
  }
  .trigger:nth-child(87):hover ~ .monitor .camera.o-y {
    transform: rotateY(24deg);
  }
  .trigger:nth-child(87):hover ~ .monitor .camera.o-x {
    transform: rotateX(-40deg);
  }
  .trigger:nth-child(88):hover ~ .monitor .camera.o-y {
    transform: rotateY(16deg);
  }
  .trigger:nth-child(88):hover ~ .monitor .camera.o-x {
    transform: rotateX(-40deg);
  }
  .trigger:nth-child(89):hover ~ .monitor .camera.o-y {
    transform: rotateY(8deg);
  }
  .trigger:nth-child(89):hover ~ .monitor .camera.o-x {
    transform: rotateX(-40deg);
  }
  .trigger:nth-child(90):hover ~ .monitor .camera.o-y {
    transform: rotateY(0deg);
  }
  .trigger:nth-child(90):hover ~ .monitor .camera.o-x {
    transform: rotateX(-40deg);
  }
  .trigger:nth-child(91):hover ~ .monitor .camera.o-y {
    transform: rotateY(-8deg);
  }
  .trigger:nth-child(91):hover ~ .monitor .camera.o-x {
    transform: rotateX(-40deg);
  }
  .trigger:nth-child(92):hover ~ .monitor .camera.o-y {
    transform: rotateY(-16deg);
  }
  .trigger:nth-child(92):hover ~ .monitor .camera.o-x {
    transform: rotateX(-40deg);
  }
  .trigger:nth-child(93):hover ~ .monitor .camera.o-y {
    transform: rotateY(-24deg);
  }
  .trigger:nth-child(93):hover ~ .monitor .camera.o-x {
    transform: rotateX(-40deg);
  }
  .trigger:nth-child(94):hover ~ .monitor .camera.o-y {
    transform: rotateY(-32deg);
  }
  .trigger:nth-child(94):hover ~ .monitor .camera.o-x {
    transform: rotateX(-40deg);
  }
  .trigger:nth-child(95):hover ~ .monitor .camera.o-y {
    transform: rotateY(-40deg);
  }
  .trigger:nth-child(95):hover ~ .monitor .camera.o-x {
    transform: rotateX(-40deg);
  }
  .trigger:nth-child(96):hover ~ .monitor .camera.o-y {
    transform: rotateY(-48deg);
  }
  .trigger:nth-child(96):hover ~ .monitor .camera.o-x {
    transform: rotateX(-40deg);
  }
  .trigger:nth-child(97):hover ~ .monitor .camera.o-y {
    transform: rotateY(-56deg);
  }
  .trigger:nth-child(97):hover ~ .monitor .camera.o-x {
    transform: rotateX(-40deg);
  }
  .trigger:nth-child(98):hover ~ .monitor .camera.o-y {
    transform: rotateY(-64deg);
  }
  .trigger:nth-child(98):hover ~ .monitor .camera.o-x {
    transform: rotateX(-40deg);
  }
  .trigger:nth-child(99):hover ~ .monitor .camera.o-y {
    transform: rotateY(-72deg);
  }
  .trigger:nth-child(99):hover ~ .monitor .camera.o-x {
    transform: rotateX(-40deg);
  }
  .trigger:nth-child(100):hover ~ .monitor .camera.o-y {
    transform: rotateY(-80deg);
  }
  .trigger:nth-child(100):hover ~ .monitor .camera.o-x {
    transform: rotateX(-40deg);
  }
  .trigger:nth-child(101):hover ~ .monitor .camera.o-y {
    transform: rotateY(72deg);
  }
  .trigger:nth-child(101):hover ~ .monitor .camera.o-x {
    transform: rotateX(-32deg);
  }
  .trigger:nth-child(102):hover ~ .monitor .camera.o-y {
    transform: rotateY(64deg);
  }
  .trigger:nth-child(102):hover ~ .monitor .camera.o-x {
    transform: rotateX(-32deg);
  }
  .trigger:nth-child(103):hover ~ .monitor .camera.o-y {
    transform: rotateY(56deg);
  }
  .trigger:nth-child(103):hover ~ .monitor .camera.o-x {
    transform: rotateX(-32deg);
  }
  .trigger:nth-child(104):hover ~ .monitor .camera.o-y {
    transform: rotateY(48deg);
  }
  .trigger:nth-child(104):hover ~ .monitor .camera.o-x {
    transform: rotateX(-32deg);
  }
  .trigger:nth-child(105):hover ~ .monitor .camera.o-y {
    transform: rotateY(40deg);
  }
  .trigger:nth-child(105):hover ~ .monitor .camera.o-x {
    transform: rotateX(-32deg);
  }
  .trigger:nth-child(106):hover ~ .monitor .camera.o-y {
    transform: rotateY(32deg);
  }
  .trigger:nth-child(106):hover ~ .monitor .camera.o-x {
    transform: rotateX(-32deg);
  }
  .trigger:nth-child(107):hover ~ .monitor .camera.o-y {
    transform: rotateY(24deg);
  }
  .trigger:nth-child(107):hover ~ .monitor .camera.o-x {
    transform: rotateX(-32deg);
  }
  .trigger:nth-child(108):hover ~ .monitor .camera.o-y {
    transform: rotateY(16deg);
  }
  .trigger:nth-child(108):hover ~ .monitor .camera.o-x {
    transform: rotateX(-32deg);
  }
  .trigger:nth-child(109):hover ~ .monitor .camera.o-y {
    transform: rotateY(8deg);
  }
  .trigger:nth-child(109):hover ~ .monitor .camera.o-x {
    transform: rotateX(-32deg);
  }
  .trigger:nth-child(110):hover ~ .monitor .camera.o-y {
    transform: rotateY(0deg);
  }
  .trigger:nth-child(110):hover ~ .monitor .camera.o-x {
    transform: rotateX(-32deg);
  }
  .trigger:nth-child(111):hover ~ .monitor .camera.o-y {
    transform: rotateY(-8deg);
  }
  .trigger:nth-child(111):hover ~ .monitor .camera.o-x {
    transform: rotateX(-32deg);
  }
  .trigger:nth-child(112):hover ~ .monitor .camera.o-y {
    transform: rotateY(-16deg);
  }
  .trigger:nth-child(112):hover ~ .monitor .camera.o-x {
    transform: rotateX(-32deg);
  }
  .trigger:nth-child(113):hover ~ .monitor .camera.o-y {
    transform: rotateY(-24deg);
  }
  .trigger:nth-child(113):hover ~ .monitor .camera.o-x {
    transform: rotateX(-32deg);
  }
  .trigger:nth-child(114):hover ~ .monitor .camera.o-y {
    transform: rotateY(-32deg);
  }
  .trigger:nth-child(114):hover ~ .monitor .camera.o-x {
    transform: rotateX(-32deg);
  }
  .trigger:nth-child(115):hover ~ .monitor .camera.o-y {
    transform: rotateY(-40deg);
  }
  .trigger:nth-child(115):hover ~ .monitor .camera.o-x {
    transform: rotateX(-32deg);
  }
  .trigger:nth-child(116):hover ~ .monitor .camera.o-y {
    transform: rotateY(-48deg);
  }
  .trigger:nth-child(116):hover ~ .monitor .camera.o-x {
    transform: rotateX(-32deg);
  }
  .trigger:nth-child(117):hover ~ .monitor .camera.o-y {
    transform: rotateY(-56deg);
  }
  .trigger:nth-child(117):hover ~ .monitor .camera.o-x {
    transform: rotateX(-32deg);
  }
  .trigger:nth-child(118):hover ~ .monitor .camera.o-y {
    transform: rotateY(-64deg);
  }
  .trigger:nth-child(118):hover ~ .monitor .camera.o-x {
    transform: rotateX(-32deg);
  }
  .trigger:nth-child(119):hover ~ .monitor .camera.o-y {
    transform: rotateY(-72deg);
  }
  .trigger:nth-child(119):hover ~ .monitor .camera.o-x {
    transform: rotateX(-32deg);
  }
  .trigger:nth-child(120):hover ~ .monitor .camera.o-y {
    transform: rotateY(-80deg);
  }
  .trigger:nth-child(120):hover ~ .monitor .camera.o-x {
    transform: rotateX(-32deg);
  }
  .trigger:nth-child(121):hover ~ .monitor .camera.o-y {
    transform: rotateY(72deg);
  }
  .trigger:nth-child(121):hover ~ .monitor .camera.o-x {
    transform: rotateX(-24deg);
  }
  .trigger:nth-child(122):hover ~ .monitor .camera.o-y {
    transform: rotateY(64deg);
  }
  .trigger:nth-child(122):hover ~ .monitor .camera.o-x {
    transform: rotateX(-24deg);
  }
  .trigger:nth-child(123):hover ~ .monitor .camera.o-y {
    transform: rotateY(56deg);
  }
  .trigger:nth-child(123):hover ~ .monitor .camera.o-x {
    transform: rotateX(-24deg);
  }
  .trigger:nth-child(124):hover ~ .monitor .camera.o-y {
    transform: rotateY(48deg);
  }
  .trigger:nth-child(124):hover ~ .monitor .camera.o-x {
    transform: rotateX(-24deg);
  }
  .trigger:nth-child(125):hover ~ .monitor .camera.o-y {
    transform: rotateY(40deg);
  }
  .trigger:nth-child(125):hover ~ .monitor .camera.o-x {
    transform: rotateX(-24deg);
  }
  .trigger:nth-child(126):hover ~ .monitor .camera.o-y {
    transform: rotateY(32deg);
  }
  .trigger:nth-child(126):hover ~ .monitor .camera.o-x {
    transform: rotateX(-24deg);
  }
  .trigger:nth-child(127):hover ~ .monitor .camera.o-y {
    transform: rotateY(24deg);
  }
  .trigger:nth-child(127):hover ~ .monitor .camera.o-x {
    transform: rotateX(-24deg);
  }
  .trigger:nth-child(128):hover ~ .monitor .camera.o-y {
    transform: rotateY(16deg);
  }
  .trigger:nth-child(128):hover ~ .monitor .camera.o-x {
    transform: rotateX(-24deg);
  }
  .trigger:nth-child(129):hover ~ .monitor .camera.o-y {
    transform: rotateY(8deg);
  }
  .trigger:nth-child(129):hover ~ .monitor .camera.o-x {
    transform: rotateX(-24deg);
  }
  .trigger:nth-child(130):hover ~ .monitor .camera.o-y {
    transform: rotateY(0deg);
  }
  .trigger:nth-child(130):hover ~ .monitor .camera.o-x {
    transform: rotateX(-24deg);
  }
  .trigger:nth-child(131):hover ~ .monitor .camera.o-y {
    transform: rotateY(-8deg);
  }
  .trigger:nth-child(131):hover ~ .monitor .camera.o-x {
    transform: rotateX(-24deg);
  }
  .trigger:nth-child(132):hover ~ .monitor .camera.o-y {
    transform: rotateY(-16deg);
  }
  .trigger:nth-child(132):hover ~ .monitor .camera.o-x {
    transform: rotateX(-24deg);
  }
  .trigger:nth-child(133):hover ~ .monitor .camera.o-y {
    transform: rotateY(-24deg);
  }
  .trigger:nth-child(133):hover ~ .monitor .camera.o-x {
    transform: rotateX(-24deg);
  }
  .trigger:nth-child(134):hover ~ .monitor .camera.o-y {
    transform: rotateY(-32deg);
  }
  .trigger:nth-child(134):hover ~ .monitor .camera.o-x {
    transform: rotateX(-24deg);
  }
  .trigger:nth-child(135):hover ~ .monitor .camera.o-y {
    transform: rotateY(-40deg);
  }
  .trigger:nth-child(135):hover ~ .monitor .camera.o-x {
    transform: rotateX(-24deg);
  }
  .trigger:nth-child(136):hover ~ .monitor .camera.o-y {
    transform: rotateY(-48deg);
  }
  .trigger:nth-child(136):hover ~ .monitor .camera.o-x {
    transform: rotateX(-24deg);
  }
  .trigger:nth-child(137):hover ~ .monitor .camera.o-y {
    transform: rotateY(-56deg);
  }
  .trigger:nth-child(137):hover ~ .monitor .camera.o-x {
    transform: rotateX(-24deg);
  }
  .trigger:nth-child(138):hover ~ .monitor .camera.o-y {
    transform: rotateY(-64deg);
  }
  .trigger:nth-child(138):hover ~ .monitor .camera.o-x {
    transform: rotateX(-24deg);
  }
  .trigger:nth-child(139):hover ~ .monitor .camera.o-y {
    transform: rotateY(-72deg);
  }
  .trigger:nth-child(139):hover ~ .monitor .camera.o-x {
    transform: rotateX(-24deg);
  }
  .trigger:nth-child(140):hover ~ .monitor .camera.o-y {
    transform: rotateY(-80deg);
  }
  .trigger:nth-child(140):hover ~ .monitor .camera.o-x {
    transform: rotateX(-24deg);
  }
  .trigger:nth-child(141):hover ~ .monitor .camera.o-y {
    transform: rotateY(72deg);
  }
  .trigger:nth-child(141):hover ~ .monitor .camera.o-x {
    transform: rotateX(-16deg);
  }
  .trigger:nth-child(142):hover ~ .monitor .camera.o-y {
    transform: rotateY(64deg);
  }
  .trigger:nth-child(142):hover ~ .monitor .camera.o-x {
    transform: rotateX(-16deg);
  }
  .trigger:nth-child(143):hover ~ .monitor .camera.o-y {
    transform: rotateY(56deg);
  }
  .trigger:nth-child(143):hover ~ .monitor .camera.o-x {
    transform: rotateX(-16deg);
  }
  .trigger:nth-child(144):hover ~ .monitor .camera.o-y {
    transform: rotateY(48deg);
  }
  .trigger:nth-child(144):hover ~ .monitor .camera.o-x {
    transform: rotateX(-16deg);
  }
  .trigger:nth-child(145):hover ~ .monitor .camera.o-y {
    transform: rotateY(40deg);
  }
  .trigger:nth-child(145):hover ~ .monitor .camera.o-x {
    transform: rotateX(-16deg);
  }
  .trigger:nth-child(146):hover ~ .monitor .camera.o-y {
    transform: rotateY(32deg);
  }
  .trigger:nth-child(146):hover ~ .monitor .camera.o-x {
    transform: rotateX(-16deg);
  }
  .trigger:nth-child(147):hover ~ .monitor .camera.o-y {
    transform: rotateY(24deg);
  }
  .trigger:nth-child(147):hover ~ .monitor .camera.o-x {
    transform: rotateX(-16deg);
  }
  .trigger:nth-child(148):hover ~ .monitor .camera.o-y {
    transform: rotateY(16deg);
  }
  .trigger:nth-child(148):hover ~ .monitor .camera.o-x {
    transform: rotateX(-16deg);
  }
  .trigger:nth-child(149):hover ~ .monitor .camera.o-y {
    transform: rotateY(8deg);
  }
  .trigger:nth-child(149):hover ~ .monitor .camera.o-x {
    transform: rotateX(-16deg);
  }
  .trigger:nth-child(150):hover ~ .monitor .camera.o-y {
    transform: rotateY(0deg);
  }
  .trigger:nth-child(150):hover ~ .monitor .camera.o-x {
    transform: rotateX(-16deg);
  }
  .trigger:nth-child(151):hover ~ .monitor .camera.o-y {
    transform: rotateY(-8deg);
  }
  .trigger:nth-child(151):hover ~ .monitor .camera.o-x {
    transform: rotateX(-16deg);
  }
  .trigger:nth-child(152):hover ~ .monitor .camera.o-y {
    transform: rotateY(-16deg);
  }
  .trigger:nth-child(152):hover ~ .monitor .camera.o-x {
    transform: rotateX(-16deg);
  }
  .trigger:nth-child(153):hover ~ .monitor .camera.o-y {
    transform: rotateY(-24deg);
  }
  .trigger:nth-child(153):hover ~ .monitor .camera.o-x {
    transform: rotateX(-16deg);
  }
  .trigger:nth-child(154):hover ~ .monitor .camera.o-y {
    transform: rotateY(-32deg);
  }
  .trigger:nth-child(154):hover ~ .monitor .camera.o-x {
    transform: rotateX(-16deg);
  }
  .trigger:nth-child(155):hover ~ .monitor .camera.o-y {
    transform: rotateY(-40deg);
  }
  .trigger:nth-child(155):hover ~ .monitor .camera.o-x {
    transform: rotateX(-16deg);
  }
  .trigger:nth-child(156):hover ~ .monitor .camera.o-y {
    transform: rotateY(-48deg);
  }
  .trigger:nth-child(156):hover ~ .monitor .camera.o-x {
    transform: rotateX(-16deg);
  }
  .trigger:nth-child(157):hover ~ .monitor .camera.o-y {
    transform: rotateY(-56deg);
  }
  .trigger:nth-child(157):hover ~ .monitor .camera.o-x {
    transform: rotateX(-16deg);
  }
  .trigger:nth-child(158):hover ~ .monitor .camera.o-y {
    transform: rotateY(-64deg);
  }
  .trigger:nth-child(158):hover ~ .monitor .camera.o-x {
    transform: rotateX(-16deg);
  }
  .trigger:nth-child(159):hover ~ .monitor .camera.o-y {
    transform: rotateY(-72deg);
  }
  .trigger:nth-child(159):hover ~ .monitor .camera.o-x {
    transform: rotateX(-16deg);
  }
  .trigger:nth-child(160):hover ~ .monitor .camera.o-y {
    transform: rotateY(-80deg);
  }
  .trigger:nth-child(160):hover ~ .monitor .camera.o-x {
    transform: rotateX(-16deg);
  }
  .trigger:nth-child(161):hover ~ .monitor .camera.o-y {
    transform: rotateY(72deg);
  }
  .trigger:nth-child(161):hover ~ .monitor .camera.o-x {
    transform: rotateX(-8deg);
  }
  .trigger:nth-child(162):hover ~ .monitor .camera.o-y {
    transform: rotateY(64deg);
  }
  .trigger:nth-child(162):hover ~ .monitor .camera.o-x {
    transform: rotateX(-8deg);
  }
  .trigger:nth-child(163):hover ~ .monitor .camera.o-y {
    transform: rotateY(56deg);
  }
  .trigger:nth-child(163):hover ~ .monitor .camera.o-x {
    transform: rotateX(-8deg);
  }
  .trigger:nth-child(164):hover ~ .monitor .camera.o-y {
    transform: rotateY(48deg);
  }
  .trigger:nth-child(164):hover ~ .monitor .camera.o-x {
    transform: rotateX(-8deg);
  }
  .trigger:nth-child(165):hover ~ .monitor .camera.o-y {
    transform: rotateY(40deg);
  }
  .trigger:nth-child(165):hover ~ .monitor .camera.o-x {
    transform: rotateX(-8deg);
  }
  .trigger:nth-child(166):hover ~ .monitor .camera.o-y {
    transform: rotateY(32deg);
  }
  .trigger:nth-child(166):hover ~ .monitor .camera.o-x {
    transform: rotateX(-8deg);
  }
  .trigger:nth-child(167):hover ~ .monitor .camera.o-y {
    transform: rotateY(24deg);
  }
  .trigger:nth-child(167):hover ~ .monitor .camera.o-x {
    transform: rotateX(-8deg);
  }
  .trigger:nth-child(168):hover ~ .monitor .camera.o-y {
    transform: rotateY(16deg);
  }
  .trigger:nth-child(168):hover ~ .monitor .camera.o-x {
    transform: rotateX(-8deg);
  }
  .trigger:nth-child(169):hover ~ .monitor .camera.o-y {
    transform: rotateY(8deg);
  }
  .trigger:nth-child(169):hover ~ .monitor .camera.o-x {
    transform: rotateX(-8deg);
  }
  .trigger:nth-child(170):hover ~ .monitor .camera.o-y {
    transform: rotateY(0deg);
  }
  .trigger:nth-child(170):hover ~ .monitor .camera.o-x {
    transform: rotateX(-8deg);
  }
  .trigger:nth-child(171):hover ~ .monitor .camera.o-y {
    transform: rotateY(-8deg);
  }
  .trigger:nth-child(171):hover ~ .monitor .camera.o-x {
    transform: rotateX(-8deg);
  }
  .trigger:nth-child(172):hover ~ .monitor .camera.o-y {
    transform: rotateY(-16deg);
  }
  .trigger:nth-child(172):hover ~ .monitor .camera.o-x {
    transform: rotateX(-8deg);
  }
  .trigger:nth-child(173):hover ~ .monitor .camera.o-y {
    transform: rotateY(-24deg);
  }
  .trigger:nth-child(173):hover ~ .monitor .camera.o-x {
    transform: rotateX(-8deg);
  }
  .trigger:nth-child(174):hover ~ .monitor .camera.o-y {
    transform: rotateY(-32deg);
  }
  .trigger:nth-child(174):hover ~ .monitor .camera.o-x {
    transform: rotateX(-8deg);
  }
  .trigger:nth-child(175):hover ~ .monitor .camera.o-y {
    transform: rotateY(-40deg);
  }
  .trigger:nth-child(175):hover ~ .monitor .camera.o-x {
    transform: rotateX(-8deg);
  }
  .trigger:nth-child(176):hover ~ .monitor .camera.o-y {
    transform: rotateY(-48deg);
  }
  .trigger:nth-child(176):hover ~ .monitor .camera.o-x {
    transform: rotateX(-8deg);
  }
  .trigger:nth-child(177):hover ~ .monitor .camera.o-y {
    transform: rotateY(-56deg);
  }
  .trigger:nth-child(177):hover ~ .monitor .camera.o-x {
    transform: rotateX(-8deg);
  }
  .trigger:nth-child(178):hover ~ .monitor .camera.o-y {
    transform: rotateY(-64deg);
  }
  .trigger:nth-child(178):hover ~ .monitor .camera.o-x {
    transform: rotateX(-8deg);
  }
  .trigger:nth-child(179):hover ~ .monitor .camera.o-y {
    transform: rotateY(-72deg);
  }
  .trigger:nth-child(179):hover ~ .monitor .camera.o-x {
    transform: rotateX(-8deg);
  }
  .trigger:nth-child(180):hover ~ .monitor .camera.o-y {
    transform: rotateY(-80deg);
  }
  .trigger:nth-child(180):hover ~ .monitor .camera.o-x {
    transform: rotateX(-8deg);
  }
  .trigger:nth-child(181):hover ~ .monitor .camera.o-y {
    transform: rotateY(72deg);
  }
  .trigger:nth-child(181):hover ~ .monitor .camera.o-x {
    transform: rotateX(0deg);
  }
  .trigger:nth-child(182):hover ~ .monitor .camera.o-y {
    transform: rotateY(64deg);
  }
  .trigger:nth-child(182):hover ~ .monitor .camera.o-x {
    transform: rotateX(0deg);
  }
  .trigger:nth-child(183):hover ~ .monitor .camera.o-y {
    transform: rotateY(56deg);
  }
  .trigger:nth-child(183):hover ~ .monitor .camera.o-x {
    transform: rotateX(0deg);
  }
  .trigger:nth-child(184):hover ~ .monitor .camera.o-y {
    transform: rotateY(48deg);
  }
  .trigger:nth-child(184):hover ~ .monitor .camera.o-x {
    transform: rotateX(0deg);
  }
  .trigger:nth-child(185):hover ~ .monitor .camera.o-y {
    transform: rotateY(40deg);
  }
  .trigger:nth-child(185):hover ~ .monitor .camera.o-x {
    transform: rotateX(0deg);
  }
  .trigger:nth-child(186):hover ~ .monitor .camera.o-y {
    transform: rotateY(32deg);
  }
  .trigger:nth-child(186):hover ~ .monitor .camera.o-x {
    transform: rotateX(0deg);
  }
  .trigger:nth-child(187):hover ~ .monitor .camera.o-y {
    transform: rotateY(24deg);
  }
  .trigger:nth-child(187):hover ~ .monitor .camera.o-x {
    transform: rotateX(0deg);
  }
  .trigger:nth-child(188):hover ~ .monitor .camera.o-y {
    transform: rotateY(16deg);
  }
  .trigger:nth-child(188):hover ~ .monitor .camera.o-x {
    transform: rotateX(0deg);
  }
  .trigger:nth-child(189):hover ~ .monitor .camera.o-y {
    transform: rotateY(8deg);
  }
  .trigger:nth-child(189):hover ~ .monitor .camera.o-x {
    transform: rotateX(0deg);
  }
  .trigger:nth-child(190):hover ~ .monitor .camera.o-y {
    transform: rotateY(0deg);
  }
  .trigger:nth-child(190):hover ~ .monitor .camera.o-x {
    transform: rotateX(0deg);
  }
  .trigger:nth-child(191):hover ~ .monitor .camera.o-y {
    transform: rotateY(-8deg);
  }
  .trigger:nth-child(191):hover ~ .monitor .camera.o-x {
    transform: rotateX(0deg);
  }
  .trigger:nth-child(192):hover ~ .monitor .camera.o-y {
    transform: rotateY(-16deg);
  }
  .trigger:nth-child(192):hover ~ .monitor .camera.o-x {
    transform: rotateX(0deg);
  }
  .trigger:nth-child(193):hover ~ .monitor .camera.o-y {
    transform: rotateY(-24deg);
  }
  .trigger:nth-child(193):hover ~ .monitor .camera.o-x {
    transform: rotateX(0deg);
  }
  .trigger:nth-child(194):hover ~ .monitor .camera.o-y {
    transform: rotateY(-32deg);
  }
  .trigger:nth-child(194):hover ~ .monitor .camera.o-x {
    transform: rotateX(0deg);
  }
  .trigger:nth-child(195):hover ~ .monitor .camera.o-y {
    transform: rotateY(-40deg);
  }
  .trigger:nth-child(195):hover ~ .monitor .camera.o-x {
    transform: rotateX(0deg);
  }
  .trigger:nth-child(196):hover ~ .monitor .camera.o-y {
    transform: rotateY(-48deg);
  }
  .trigger:nth-child(196):hover ~ .monitor .camera.o-x {
    transform: rotateX(0deg);
  }
  .trigger:nth-child(197):hover ~ .monitor .camera.o-y {
    transform: rotateY(-56deg);
  }
  .trigger:nth-child(197):hover ~ .monitor .camera.o-x {
    transform: rotateX(0deg);
  }
  .trigger:nth-child(198):hover ~ .monitor .camera.o-y {
    transform: rotateY(-64deg);
  }
  .trigger:nth-child(198):hover ~ .monitor .camera.o-x {
    transform: rotateX(0deg);
  }
  .trigger:nth-child(199):hover ~ .monitor .camera.o-y {
    transform: rotateY(-72deg);
  }
  .trigger:nth-child(199):hover ~ .monitor .camera.o-x {
    transform: rotateX(0deg);
  }
  .trigger:nth-child(200):hover ~ .monitor .camera.o-y {
    transform: rotateY(-80deg);
  }
  .trigger:nth-child(200):hover ~ .monitor .camera.o-x {
    transform: rotateX(0deg);
  }
  .trigger:nth-child(201):hover ~ .monitor .camera.o-y {
    transform: rotateY(72deg);
  }
  .trigger:nth-child(201):hover ~ .monitor .camera.o-x {
    transform: rotateX(8deg);
  }
  .trigger:nth-child(202):hover ~ .monitor .camera.o-y {
    transform: rotateY(64deg);
  }
  .trigger:nth-child(202):hover ~ .monitor .camera.o-x {
    transform: rotateX(8deg);
  }
  .trigger:nth-child(203):hover ~ .monitor .camera.o-y {
    transform: rotateY(56deg);
  }
  .trigger:nth-child(203):hover ~ .monitor .camera.o-x {
    transform: rotateX(8deg);
  }
  .trigger:nth-child(204):hover ~ .monitor .camera.o-y {
    transform: rotateY(48deg);
  }
  .trigger:nth-child(204):hover ~ .monitor .camera.o-x {
    transform: rotateX(8deg);
  }
  .trigger:nth-child(205):hover ~ .monitor .camera.o-y {
    transform: rotateY(40deg);
  }
  .trigger:nth-child(205):hover ~ .monitor .camera.o-x {
    transform: rotateX(8deg);
  }
  .trigger:nth-child(206):hover ~ .monitor .camera.o-y {
    transform: rotateY(32deg);
  }
  .trigger:nth-child(206):hover ~ .monitor .camera.o-x {
    transform: rotateX(8deg);
  }
  .trigger:nth-child(207):hover ~ .monitor .camera.o-y {
    transform: rotateY(24deg);
  }
  .trigger:nth-child(207):hover ~ .monitor .camera.o-x {
    transform: rotateX(8deg);
  }
  .trigger:nth-child(208):hover ~ .monitor .camera.o-y {
    transform: rotateY(16deg);
  }
  .trigger:nth-child(208):hover ~ .monitor .camera.o-x {
    transform: rotateX(8deg);
  }
  .trigger:nth-child(209):hover ~ .monitor .camera.o-y {
    transform: rotateY(8deg);
  }
  .trigger:nth-child(209):hover ~ .monitor .camera.o-x {
    transform: rotateX(8deg);
  }
  .trigger:nth-child(210):hover ~ .monitor .camera.o-y {
    transform: rotateY(0deg);
  }
  .trigger:nth-child(210):hover ~ .monitor .camera.o-x {
    transform: rotateX(8deg);
  }
  .trigger:nth-child(211):hover ~ .monitor .camera.o-y {
    transform: rotateY(-8deg);
  }
  .trigger:nth-child(211):hover ~ .monitor .camera.o-x {
    transform: rotateX(8deg);
  }
  .trigger:nth-child(212):hover ~ .monitor .camera.o-y {
    transform: rotateY(-16deg);
  }
  .trigger:nth-child(212):hover ~ .monitor .camera.o-x {
    transform: rotateX(8deg);
  }
  .trigger:nth-child(213):hover ~ .monitor .camera.o-y {
    transform: rotateY(-24deg);
  }
  .trigger:nth-child(213):hover ~ .monitor .camera.o-x {
    transform: rotateX(8deg);
  }
  .trigger:nth-child(214):hover ~ .monitor .camera.o-y {
    transform: rotateY(-32deg);
  }
  .trigger:nth-child(214):hover ~ .monitor .camera.o-x {
    transform: rotateX(8deg);
  }
  .trigger:nth-child(215):hover ~ .monitor .camera.o-y {
    transform: rotateY(-40deg);
  }
  .trigger:nth-child(215):hover ~ .monitor .camera.o-x {
    transform: rotateX(8deg);
  }
  .trigger:nth-child(216):hover ~ .monitor .camera.o-y {
    transform: rotateY(-48deg);
  }
  .trigger:nth-child(216):hover ~ .monitor .camera.o-x {
    transform: rotateX(8deg);
  }
  .trigger:nth-child(217):hover ~ .monitor .camera.o-y {
    transform: rotateY(-56deg);
  }
  .trigger:nth-child(217):hover ~ .monitor .camera.o-x {
    transform: rotateX(8deg);
  }
  .trigger:nth-child(218):hover ~ .monitor .camera.o-y {
    transform: rotateY(-64deg);
  }
  .trigger:nth-child(218):hover ~ .monitor .camera.o-x {
    transform: rotateX(8deg);
  }
  .trigger:nth-child(219):hover ~ .monitor .camera.o-y {
    transform: rotateY(-72deg);
  }
  .trigger:nth-child(219):hover ~ .monitor .camera.o-x {
    transform: rotateX(8deg);
  }
  .trigger:nth-child(220):hover ~ .monitor .camera.o-y {
    transform: rotateY(-80deg);
  }
  .trigger:nth-child(220):hover ~ .monitor .camera.o-x {
    transform: rotateX(8deg);
  }
  .trigger:nth-child(221):hover ~ .monitor .camera.o-y {
    transform: rotateY(72deg);
  }
  .trigger:nth-child(221):hover ~ .monitor .camera.o-x {
    transform: rotateX(16deg);
  }
  .trigger:nth-child(222):hover ~ .monitor .camera.o-y {
    transform: rotateY(64deg);
  }
  .trigger:nth-child(222):hover ~ .monitor .camera.o-x {
    transform: rotateX(16deg);
  }
  .trigger:nth-child(223):hover ~ .monitor .camera.o-y {
    transform: rotateY(56deg);
  }
  .trigger:nth-child(223):hover ~ .monitor .camera.o-x {
    transform: rotateX(16deg);
  }
  .trigger:nth-child(224):hover ~ .monitor .camera.o-y {
    transform: rotateY(48deg);
  }
  .trigger:nth-child(224):hover ~ .monitor .camera.o-x {
    transform: rotateX(16deg);
  }
  .trigger:nth-child(225):hover ~ .monitor .camera.o-y {
    transform: rotateY(40deg);
  }
  .trigger:nth-child(225):hover ~ .monitor .camera.o-x {
    transform: rotateX(16deg);
  }
  .trigger:nth-child(226):hover ~ .monitor .camera.o-y {
    transform: rotateY(32deg);
  }
  .trigger:nth-child(226):hover ~ .monitor .camera.o-x {
    transform: rotateX(16deg);
  }
  .trigger:nth-child(227):hover ~ .monitor .camera.o-y {
    transform: rotateY(24deg);
  }
  .trigger:nth-child(227):hover ~ .monitor .camera.o-x {
    transform: rotateX(16deg);
  }
  .trigger:nth-child(228):hover ~ .monitor .camera.o-y {
    transform: rotateY(16deg);
  }
  .trigger:nth-child(228):hover ~ .monitor .camera.o-x {
    transform: rotateX(16deg);
  }
  .trigger:nth-child(229):hover ~ .monitor .camera.o-y {
    transform: rotateY(8deg);
  }
  .trigger:nth-child(229):hover ~ .monitor .camera.o-x {
    transform: rotateX(16deg);
  }
  .trigger:nth-child(230):hover ~ .monitor .camera.o-y {
    transform: rotateY(0deg);
  }
  .trigger:nth-child(230):hover ~ .monitor .camera.o-x {
    transform: rotateX(16deg);
  }
  .trigger:nth-child(231):hover ~ .monitor .camera.o-y {
    transform: rotateY(-8deg);
  }
  .trigger:nth-child(231):hover ~ .monitor .camera.o-x {
    transform: rotateX(16deg);
  }
  .trigger:nth-child(232):hover ~ .monitor .camera.o-y {
    transform: rotateY(-16deg);
  }
  .trigger:nth-child(232):hover ~ .monitor .camera.o-x {
    transform: rotateX(16deg);
  }
  .trigger:nth-child(233):hover ~ .monitor .camera.o-y {
    transform: rotateY(-24deg);
  }
  .trigger:nth-child(233):hover ~ .monitor .camera.o-x {
    transform: rotateX(16deg);
  }
  .trigger:nth-child(234):hover ~ .monitor .camera.o-y {
    transform: rotateY(-32deg);
  }
  .trigger:nth-child(234):hover ~ .monitor .camera.o-x {
    transform: rotateX(16deg);
  }
  .trigger:nth-child(235):hover ~ .monitor .camera.o-y {
    transform: rotateY(-40deg);
  }
  .trigger:nth-child(235):hover ~ .monitor .camera.o-x {
    transform: rotateX(16deg);
  }
  .trigger:nth-child(236):hover ~ .monitor .camera.o-y {
    transform: rotateY(-48deg);
  }
  .trigger:nth-child(236):hover ~ .monitor .camera.o-x {
    transform: rotateX(16deg);
  }
  .trigger:nth-child(237):hover ~ .monitor .camera.o-y {
    transform: rotateY(-56deg);
  }
  .trigger:nth-child(237):hover ~ .monitor .camera.o-x {
    transform: rotateX(16deg);
  }
  .trigger:nth-child(238):hover ~ .monitor .camera.o-y {
    transform: rotateY(-64deg);
  }
  .trigger:nth-child(238):hover ~ .monitor .camera.o-x {
    transform: rotateX(16deg);
  }
  .trigger:nth-child(239):hover ~ .monitor .camera.o-y {
    transform: rotateY(-72deg);
  }
  .trigger:nth-child(239):hover ~ .monitor .camera.o-x {
    transform: rotateX(16deg);
  }
  .trigger:nth-child(240):hover ~ .monitor .camera.o-y {
    transform: rotateY(-80deg);
  }
  .trigger:nth-child(240):hover ~ .monitor .camera.o-x {
    transform: rotateX(16deg);
  }
  .trigger:nth-child(241):hover ~ .monitor .camera.o-y {
    transform: rotateY(72deg);
  }
  .trigger:nth-child(241):hover ~ .monitor .camera.o-x {
    transform: rotateX(24deg);
  }
  .trigger:nth-child(242):hover ~ .monitor .camera.o-y {
    transform: rotateY(64deg);
  }
  .trigger:nth-child(242):hover ~ .monitor .camera.o-x {
    transform: rotateX(24deg);
  }
  .trigger:nth-child(243):hover ~ .monitor .camera.o-y {
    transform: rotateY(56deg);
  }
  .trigger:nth-child(243):hover ~ .monitor .camera.o-x {
    transform: rotateX(24deg);
  }
  .trigger:nth-child(244):hover ~ .monitor .camera.o-y {
    transform: rotateY(48deg);
  }
  .trigger:nth-child(244):hover ~ .monitor .camera.o-x {
    transform: rotateX(24deg);
  }
  .trigger:nth-child(245):hover ~ .monitor .camera.o-y {
    transform: rotateY(40deg);
  }
  .trigger:nth-child(245):hover ~ .monitor .camera.o-x {
    transform: rotateX(24deg);
  }
  .trigger:nth-child(246):hover ~ .monitor .camera.o-y {
    transform: rotateY(32deg);
  }
  .trigger:nth-child(246):hover ~ .monitor .camera.o-x {
    transform: rotateX(24deg);
  }
  .trigger:nth-child(247):hover ~ .monitor .camera.o-y {
    transform: rotateY(24deg);
  }
  .trigger:nth-child(247):hover ~ .monitor .camera.o-x {
    transform: rotateX(24deg);
  }
  .trigger:nth-child(248):hover ~ .monitor .camera.o-y {
    transform: rotateY(16deg);
  }
  .trigger:nth-child(248):hover ~ .monitor .camera.o-x {
    transform: rotateX(24deg);
  }
  .trigger:nth-child(249):hover ~ .monitor .camera.o-y {
    transform: rotateY(8deg);
  }
  .trigger:nth-child(249):hover ~ .monitor .camera.o-x {
    transform: rotateX(24deg);
  }
  .trigger:nth-child(250):hover ~ .monitor .camera.o-y {
    transform: rotateY(0deg);
  }
  .trigger:nth-child(250):hover ~ .monitor .camera.o-x {
    transform: rotateX(24deg);
  }
  .trigger:nth-child(251):hover ~ .monitor .camera.o-y {
    transform: rotateY(-8deg);
  }
  .trigger:nth-child(251):hover ~ .monitor .camera.o-x {
    transform: rotateX(24deg);
  }
  .trigger:nth-child(252):hover ~ .monitor .camera.o-y {
    transform: rotateY(-16deg);
  }
  .trigger:nth-child(252):hover ~ .monitor .camera.o-x {
    transform: rotateX(24deg);
  }
  .trigger:nth-child(253):hover ~ .monitor .camera.o-y {
    transform: rotateY(-24deg);
  }
  .trigger:nth-child(253):hover ~ .monitor .camera.o-x {
    transform: rotateX(24deg);
  }
  .trigger:nth-child(254):hover ~ .monitor .camera.o-y {
    transform: rotateY(-32deg);
  }
  .trigger:nth-child(254):hover ~ .monitor .camera.o-x {
    transform: rotateX(24deg);
  }
  .trigger:nth-child(255):hover ~ .monitor .camera.o-y {
    transform: rotateY(-40deg);
  }
  .trigger:nth-child(255):hover ~ .monitor .camera.o-x {
    transform: rotateX(24deg);
  }
  .trigger:nth-child(256):hover ~ .monitor .camera.o-y {
    transform: rotateY(-48deg);
  }
  .trigger:nth-child(256):hover ~ .monitor .camera.o-x {
    transform: rotateX(24deg);
  }
  .trigger:nth-child(257):hover ~ .monitor .camera.o-y {
    transform: rotateY(-56deg);
  }
  .trigger:nth-child(257):hover ~ .monitor .camera.o-x {
    transform: rotateX(24deg);
  }
  .trigger:nth-child(258):hover ~ .monitor .camera.o-y {
    transform: rotateY(-64deg);
  }
  .trigger:nth-child(258):hover ~ .monitor .camera.o-x {
    transform: rotateX(24deg);
  }
  .trigger:nth-child(259):hover ~ .monitor .camera.o-y {
    transform: rotateY(-72deg);
  }
  .trigger:nth-child(259):hover ~ .monitor .camera.o-x {
    transform: rotateX(24deg);
  }
  .trigger:nth-child(260):hover ~ .monitor .camera.o-y {
    transform: rotateY(-80deg);
  }
  .trigger:nth-child(260):hover ~ .monitor .camera.o-x {
    transform: rotateX(24deg);
  }
  .trigger:nth-child(261):hover ~ .monitor .camera.o-y {
    transform: rotateY(72deg);
  }
  .trigger:nth-child(261):hover ~ .monitor .camera.o-x {
    transform: rotateX(32deg);
  }
  .trigger:nth-child(262):hover ~ .monitor .camera.o-y {
    transform: rotateY(64deg);
  }
  .trigger:nth-child(262):hover ~ .monitor .camera.o-x {
    transform: rotateX(32deg);
  }
  .trigger:nth-child(263):hover ~ .monitor .camera.o-y {
    transform: rotateY(56deg);
  }
  .trigger:nth-child(263):hover ~ .monitor .camera.o-x {
    transform: rotateX(32deg);
  }
  .trigger:nth-child(264):hover ~ .monitor .camera.o-y {
    transform: rotateY(48deg);
  }
  .trigger:nth-child(264):hover ~ .monitor .camera.o-x {
    transform: rotateX(32deg);
  }
  .trigger:nth-child(265):hover ~ .monitor .camera.o-y {
    transform: rotateY(40deg);
  }
  .trigger:nth-child(265):hover ~ .monitor .camera.o-x {
    transform: rotateX(32deg);
  }
  .trigger:nth-child(266):hover ~ .monitor .camera.o-y {
    transform: rotateY(32deg);
  }
  .trigger:nth-child(266):hover ~ .monitor .camera.o-x {
    transform: rotateX(32deg);
  }
  .trigger:nth-child(267):hover ~ .monitor .camera.o-y {
    transform: rotateY(24deg);
  }
  .trigger:nth-child(267):hover ~ .monitor .camera.o-x {
    transform: rotateX(32deg);
  }
  .trigger:nth-child(268):hover ~ .monitor .camera.o-y {
    transform: rotateY(16deg);
  }
  .trigger:nth-child(268):hover ~ .monitor .camera.o-x {
    transform: rotateX(32deg);
  }
  .trigger:nth-child(269):hover ~ .monitor .camera.o-y {
    transform: rotateY(8deg);
  }
  .trigger:nth-child(269):hover ~ .monitor .camera.o-x {
    transform: rotateX(32deg);
  }
  .trigger:nth-child(270):hover ~ .monitor .camera.o-y {
    transform: rotateY(0deg);
  }
  .trigger:nth-child(270):hover ~ .monitor .camera.o-x {
    transform: rotateX(32deg);
  }
  .trigger:nth-child(271):hover ~ .monitor .camera.o-y {
    transform: rotateY(-8deg);
  }
  .trigger:nth-child(271):hover ~ .monitor .camera.o-x {
    transform: rotateX(32deg);
  }
  .trigger:nth-child(272):hover ~ .monitor .camera.o-y {
    transform: rotateY(-16deg);
  }
  .trigger:nth-child(272):hover ~ .monitor .camera.o-x {
    transform: rotateX(32deg);
  }
  .trigger:nth-child(273):hover ~ .monitor .camera.o-y {
    transform: rotateY(-24deg);
  }
  .trigger:nth-child(273):hover ~ .monitor .camera.o-x {
    transform: rotateX(32deg);
  }
  .trigger:nth-child(274):hover ~ .monitor .camera.o-y {
    transform: rotateY(-32deg);
  }
  .trigger:nth-child(274):hover ~ .monitor .camera.o-x {
    transform: rotateX(32deg);
  }
  .trigger:nth-child(275):hover ~ .monitor .camera.o-y {
    transform: rotateY(-40deg);
  }
  .trigger:nth-child(275):hover ~ .monitor .camera.o-x {
    transform: rotateX(32deg);
  }
  .trigger:nth-child(276):hover ~ .monitor .camera.o-y {
    transform: rotateY(-48deg);
  }
  .trigger:nth-child(276):hover ~ .monitor .camera.o-x {
    transform: rotateX(32deg);
  }
  .trigger:nth-child(277):hover ~ .monitor .camera.o-y {
    transform: rotateY(-56deg);
  }
  .trigger:nth-child(277):hover ~ .monitor .camera.o-x {
    transform: rotateX(32deg);
  }
  .trigger:nth-child(278):hover ~ .monitor .camera.o-y {
    transform: rotateY(-64deg);
  }
  .trigger:nth-child(278):hover ~ .monitor .camera.o-x {
    transform: rotateX(32deg);
  }
  .trigger:nth-child(279):hover ~ .monitor .camera.o-y {
    transform: rotateY(-72deg);
  }
  .trigger:nth-child(279):hover ~ .monitor .camera.o-x {
    transform: rotateX(32deg);
  }
  .trigger:nth-child(280):hover ~ .monitor .camera.o-y {
    transform: rotateY(-80deg);
  }
  .trigger:nth-child(280):hover ~ .monitor .camera.o-x {
    transform: rotateX(32deg);
  }
  .trigger:nth-child(281):hover ~ .monitor .camera.o-y {
    transform: rotateY(72deg);
  }
  .trigger:nth-child(281):hover ~ .monitor .camera.o-x {
    transform: rotateX(40deg);
  }
  .trigger:nth-child(282):hover ~ .monitor .camera.o-y {
    transform: rotateY(64deg);
  }
  .trigger:nth-child(282):hover ~ .monitor .camera.o-x {
    transform: rotateX(40deg);
  }
  .trigger:nth-child(283):hover ~ .monitor .camera.o-y {
    transform: rotateY(56deg);
  }
  .trigger:nth-child(283):hover ~ .monitor .camera.o-x {
    transform: rotateX(40deg);
  }
  .trigger:nth-child(284):hover ~ .monitor .camera.o-y {
    transform: rotateY(48deg);
  }
  .trigger:nth-child(284):hover ~ .monitor .camera.o-x {
    transform: rotateX(40deg);
  }
  .trigger:nth-child(285):hover ~ .monitor .camera.o-y {
    transform: rotateY(40deg);
  }
  .trigger:nth-child(285):hover ~ .monitor .camera.o-x {
    transform: rotateX(40deg);
  }
  .trigger:nth-child(286):hover ~ .monitor .camera.o-y {
    transform: rotateY(32deg);
  }
  .trigger:nth-child(286):hover ~ .monitor .camera.o-x {
    transform: rotateX(40deg);
  }
  .trigger:nth-child(287):hover ~ .monitor .camera.o-y {
    transform: rotateY(24deg);
  }
  .trigger:nth-child(287):hover ~ .monitor .camera.o-x {
    transform: rotateX(40deg);
  }
  .trigger:nth-child(288):hover ~ .monitor .camera.o-y {
    transform: rotateY(16deg);
  }
  .trigger:nth-child(288):hover ~ .monitor .camera.o-x {
    transform: rotateX(40deg);
  }
  .trigger:nth-child(289):hover ~ .monitor .camera.o-y {
    transform: rotateY(8deg);
  }
  .trigger:nth-child(289):hover ~ .monitor .camera.o-x {
    transform: rotateX(40deg);
  }
  .trigger:nth-child(290):hover ~ .monitor .camera.o-y {
    transform: rotateY(0deg);
  }
  .trigger:nth-child(290):hover ~ .monitor .camera.o-x {
    transform: rotateX(40deg);
  }
  .trigger:nth-child(291):hover ~ .monitor .camera.o-y {
    transform: rotateY(-8deg);
  }
  .trigger:nth-child(291):hover ~ .monitor .camera.o-x {
    transform: rotateX(40deg);
  }
  .trigger:nth-child(292):hover ~ .monitor .camera.o-y {
    transform: rotateY(-16deg);
  }
  .trigger:nth-child(292):hover ~ .monitor .camera.o-x {
    transform: rotateX(40deg);
  }
  .trigger:nth-child(293):hover ~ .monitor .camera.o-y {
    transform: rotateY(-24deg);
  }
  .trigger:nth-child(293):hover ~ .monitor .camera.o-x {
    transform: rotateX(40deg);
  }
  .trigger:nth-child(294):hover ~ .monitor .camera.o-y {
    transform: rotateY(-32deg);
  }
  .trigger:nth-child(294):hover ~ .monitor .camera.o-x {
    transform: rotateX(40deg);
  }
  .trigger:nth-child(295):hover ~ .monitor .camera.o-y {
    transform: rotateY(-40deg);
  }
  .trigger:nth-child(295):hover ~ .monitor .camera.o-x {
    transform: rotateX(40deg);
  }
  .trigger:nth-child(296):hover ~ .monitor .camera.o-y {
    transform: rotateY(-48deg);
  }
  .trigger:nth-child(296):hover ~ .monitor .camera.o-x {
    transform: rotateX(40deg);
  }
  .trigger:nth-child(297):hover ~ .monitor .camera.o-y {
    transform: rotateY(-56deg);
  }
  .trigger:nth-child(297):hover ~ .monitor .camera.o-x {
    transform: rotateX(40deg);
  }
  .trigger:nth-child(298):hover ~ .monitor .camera.o-y {
    transform: rotateY(-64deg);
  }
  .trigger:nth-child(298):hover ~ .monitor .camera.o-x {
    transform: rotateX(40deg);
  }
  .trigger:nth-child(299):hover ~ .monitor .camera.o-y {
    transform: rotateY(-72deg);
  }
  .trigger:nth-child(299):hover ~ .monitor .camera.o-x {
    transform: rotateX(40deg);
  }
  .trigger:nth-child(300):hover ~ .monitor .camera.o-y {
    transform: rotateY(-80deg);
  }
  .trigger:nth-child(300):hover ~ .monitor .camera.o-x {
    transform: rotateX(40deg);
  }
  .trigger:nth-child(301):hover ~ .monitor .camera.o-y {
    transform: rotateY(72deg);
  }
  .trigger:nth-child(301):hover ~ .monitor .camera.o-x {
    transform: rotateX(48deg);
  }
  .trigger:nth-child(302):hover ~ .monitor .camera.o-y {
    transform: rotateY(64deg);
  }
  .trigger:nth-child(302):hover ~ .monitor .camera.o-x {
    transform: rotateX(48deg);
  }
  .trigger:nth-child(303):hover ~ .monitor .camera.o-y {
    transform: rotateY(56deg);
  }
  .trigger:nth-child(303):hover ~ .monitor .camera.o-x {
    transform: rotateX(48deg);
  }
  .trigger:nth-child(304):hover ~ .monitor .camera.o-y {
    transform: rotateY(48deg);
  }
  .trigger:nth-child(304):hover ~ .monitor .camera.o-x {
    transform: rotateX(48deg);
  }
  .trigger:nth-child(305):hover ~ .monitor .camera.o-y {
    transform: rotateY(40deg);
  }
  .trigger:nth-child(305):hover ~ .monitor .camera.o-x {
    transform: rotateX(48deg);
  }
  .trigger:nth-child(306):hover ~ .monitor .camera.o-y {
    transform: rotateY(32deg);
  }
  .trigger:nth-child(306):hover ~ .monitor .camera.o-x {
    transform: rotateX(48deg);
  }
  .trigger:nth-child(307):hover ~ .monitor .camera.o-y {
    transform: rotateY(24deg);
  }
  .trigger:nth-child(307):hover ~ .monitor .camera.o-x {
    transform: rotateX(48deg);
  }
  .trigger:nth-child(308):hover ~ .monitor .camera.o-y {
    transform: rotateY(16deg);
  }
  .trigger:nth-child(308):hover ~ .monitor .camera.o-x {
    transform: rotateX(48deg);
  }
  .trigger:nth-child(309):hover ~ .monitor .camera.o-y {
    transform: rotateY(8deg);
  }
  .trigger:nth-child(309):hover ~ .monitor .camera.o-x {
    transform: rotateX(48deg);
  }
  .trigger:nth-child(310):hover ~ .monitor .camera.o-y {
    transform: rotateY(0deg);
  }
  .trigger:nth-child(310):hover ~ .monitor .camera.o-x {
    transform: rotateX(48deg);
  }
  .trigger:nth-child(311):hover ~ .monitor .camera.o-y {
    transform: rotateY(-8deg);
  }
  .trigger:nth-child(311):hover ~ .monitor .camera.o-x {
    transform: rotateX(48deg);
  }
  .trigger:nth-child(312):hover ~ .monitor .camera.o-y {
    transform: rotateY(-16deg);
  }
  .trigger:nth-child(312):hover ~ .monitor .camera.o-x {
    transform: rotateX(48deg);
  }
  .trigger:nth-child(313):hover ~ .monitor .camera.o-y {
    transform: rotateY(-24deg);
  }
  .trigger:nth-child(313):hover ~ .monitor .camera.o-x {
    transform: rotateX(48deg);
  }
  .trigger:nth-child(314):hover ~ .monitor .camera.o-y {
    transform: rotateY(-32deg);
  }
  .trigger:nth-child(314):hover ~ .monitor .camera.o-x {
    transform: rotateX(48deg);
  }
  .trigger:nth-child(315):hover ~ .monitor .camera.o-y {
    transform: rotateY(-40deg);
  }
  .trigger:nth-child(315):hover ~ .monitor .camera.o-x {
    transform: rotateX(48deg);
  }
  .trigger:nth-child(316):hover ~ .monitor .camera.o-y {
    transform: rotateY(-48deg);
  }
  .trigger:nth-child(316):hover ~ .monitor .camera.o-x {
    transform: rotateX(48deg);
  }
  .trigger:nth-child(317):hover ~ .monitor .camera.o-y {
    transform: rotateY(-56deg);
  }
  .trigger:nth-child(317):hover ~ .monitor .camera.o-x {
    transform: rotateX(48deg);
  }
  .trigger:nth-child(318):hover ~ .monitor .camera.o-y {
    transform: rotateY(-64deg);
  }
  .trigger:nth-child(318):hover ~ .monitor .camera.o-x {
    transform: rotateX(48deg);
  }
  .trigger:nth-child(319):hover ~ .monitor .camera.o-y {
    transform: rotateY(-72deg);
  }
  .trigger:nth-child(319):hover ~ .monitor .camera.o-x {
    transform: rotateX(48deg);
  }
  .trigger:nth-child(320):hover ~ .monitor .camera.o-y {
    transform: rotateY(-80deg);
  }
  .trigger:nth-child(320):hover ~ .monitor .camera.o-x {
    transform: rotateX(48deg);
  }
  .trigger:nth-child(321):hover ~ .monitor .camera.o-y {
    transform: rotateY(72deg);
  }
  .trigger:nth-child(321):hover ~ .monitor .camera.o-x {
    transform: rotateX(56deg);
  }
  .trigger:nth-child(322):hover ~ .monitor .camera.o-y {
    transform: rotateY(64deg);
  }
  .trigger:nth-child(322):hover ~ .monitor .camera.o-x {
    transform: rotateX(56deg);
  }
  .trigger:nth-child(323):hover ~ .monitor .camera.o-y {
    transform: rotateY(56deg);
  }
  .trigger:nth-child(323):hover ~ .monitor .camera.o-x {
    transform: rotateX(56deg);
  }
  .trigger:nth-child(324):hover ~ .monitor .camera.o-y {
    transform: rotateY(48deg);
  }
  .trigger:nth-child(324):hover ~ .monitor .camera.o-x {
    transform: rotateX(56deg);
  }
  .trigger:nth-child(325):hover ~ .monitor .camera.o-y {
    transform: rotateY(40deg);
  }
  .trigger:nth-child(325):hover ~ .monitor .camera.o-x {
    transform: rotateX(56deg);
  }
  .trigger:nth-child(326):hover ~ .monitor .camera.o-y {
    transform: rotateY(32deg);
  }
  .trigger:nth-child(326):hover ~ .monitor .camera.o-x {
    transform: rotateX(56deg);
  }
  .trigger:nth-child(327):hover ~ .monitor .camera.o-y {
    transform: rotateY(24deg);
  }
  .trigger:nth-child(327):hover ~ .monitor .camera.o-x {
    transform: rotateX(56deg);
  }
  .trigger:nth-child(328):hover ~ .monitor .camera.o-y {
    transform: rotateY(16deg);
  }
  .trigger:nth-child(328):hover ~ .monitor .camera.o-x {
    transform: rotateX(56deg);
  }
  .trigger:nth-child(329):hover ~ .monitor .camera.o-y {
    transform: rotateY(8deg);
  }
  .trigger:nth-child(329):hover ~ .monitor .camera.o-x {
    transform: rotateX(56deg);
  }
  .trigger:nth-child(330):hover ~ .monitor .camera.o-y {
    transform: rotateY(0deg);
  }
  .trigger:nth-child(330):hover ~ .monitor .camera.o-x {
    transform: rotateX(56deg);
  }
  .trigger:nth-child(331):hover ~ .monitor .camera.o-y {
    transform: rotateY(-8deg);
  }
  .trigger:nth-child(331):hover ~ .monitor .camera.o-x {
    transform: rotateX(56deg);
  }
  .trigger:nth-child(332):hover ~ .monitor .camera.o-y {
    transform: rotateY(-16deg);
  }
  .trigger:nth-child(332):hover ~ .monitor .camera.o-x {
    transform: rotateX(56deg);
  }
  .trigger:nth-child(333):hover ~ .monitor .camera.o-y {
    transform: rotateY(-24deg);
  }
  .trigger:nth-child(333):hover ~ .monitor .camera.o-x {
    transform: rotateX(56deg);
  }
  .trigger:nth-child(334):hover ~ .monitor .camera.o-y {
    transform: rotateY(-32deg);
  }
  .trigger:nth-child(334):hover ~ .monitor .camera.o-x {
    transform: rotateX(56deg);
  }
  .trigger:nth-child(335):hover ~ .monitor .camera.o-y {
    transform: rotateY(-40deg);
  }
  .trigger:nth-child(335):hover ~ .monitor .camera.o-x {
    transform: rotateX(56deg);
  }
  .trigger:nth-child(336):hover ~ .monitor .camera.o-y {
    transform: rotateY(-48deg);
  }
  .trigger:nth-child(336):hover ~ .monitor .camera.o-x {
    transform: rotateX(56deg);
  }
  .trigger:nth-child(337):hover ~ .monitor .camera.o-y {
    transform: rotateY(-56deg);
  }
  .trigger:nth-child(337):hover ~ .monitor .camera.o-x {
    transform: rotateX(56deg);
  }
  .trigger:nth-child(338):hover ~ .monitor .camera.o-y {
    transform: rotateY(-64deg);
  }
  .trigger:nth-child(338):hover ~ .monitor .camera.o-x {
    transform: rotateX(56deg);
  }
  .trigger:nth-child(339):hover ~ .monitor .camera.o-y {
    transform: rotateY(-72deg);
  }
  .trigger:nth-child(339):hover ~ .monitor .camera.o-x {
    transform: rotateX(56deg);
  }
  .trigger:nth-child(340):hover ~ .monitor .camera.o-y {
    transform: rotateY(-80deg);
  }
  .trigger:nth-child(340):hover ~ .monitor .camera.o-x {
    transform: rotateX(56deg);
  }
  .trigger:nth-child(341):hover ~ .monitor .camera.o-y {
    transform: rotateY(72deg);
  }
  .trigger:nth-child(341):hover ~ .monitor .camera.o-x {
    transform: rotateX(64deg);
  }
  .trigger:nth-child(342):hover ~ .monitor .camera.o-y {
    transform: rotateY(64deg);
  }
  .trigger:nth-child(342):hover ~ .monitor .camera.o-x {
    transform: rotateX(64deg);
  }
  .trigger:nth-child(343):hover ~ .monitor .camera.o-y {
    transform: rotateY(56deg);
  }
  .trigger:nth-child(343):hover ~ .monitor .camera.o-x {
    transform: rotateX(64deg);
  }
  .trigger:nth-child(344):hover ~ .monitor .camera.o-y {
    transform: rotateY(48deg);
  }
  .trigger:nth-child(344):hover ~ .monitor .camera.o-x {
    transform: rotateX(64deg);
  }
  .trigger:nth-child(345):hover ~ .monitor .camera.o-y {
    transform: rotateY(40deg);
  }
  .trigger:nth-child(345):hover ~ .monitor .camera.o-x {
    transform: rotateX(64deg);
  }
  .trigger:nth-child(346):hover ~ .monitor .camera.o-y {
    transform: rotateY(32deg);
  }
  .trigger:nth-child(346):hover ~ .monitor .camera.o-x {
    transform: rotateX(64deg);
  }
  .trigger:nth-child(347):hover ~ .monitor .camera.o-y {
    transform: rotateY(24deg);
  }
  .trigger:nth-child(347):hover ~ .monitor .camera.o-x {
    transform: rotateX(64deg);
  }
  .trigger:nth-child(348):hover ~ .monitor .camera.o-y {
    transform: rotateY(16deg);
  }
  .trigger:nth-child(348):hover ~ .monitor .camera.o-x {
    transform: rotateX(64deg);
  }
  .trigger:nth-child(349):hover ~ .monitor .camera.o-y {
    transform: rotateY(8deg);
  }
  .trigger:nth-child(349):hover ~ .monitor .camera.o-x {
    transform: rotateX(64deg);
  }
  .trigger:nth-child(350):hover ~ .monitor .camera.o-y {
    transform: rotateY(0deg);
  }
  .trigger:nth-child(350):hover ~ .monitor .camera.o-x {
    transform: rotateX(64deg);
  }
  .trigger:nth-child(351):hover ~ .monitor .camera.o-y {
    transform: rotateY(-8deg);
  }
  .trigger:nth-child(351):hover ~ .monitor .camera.o-x {
    transform: rotateX(64deg);
  }
  .trigger:nth-child(352):hover ~ .monitor .camera.o-y {
    transform: rotateY(-16deg);
  }
  .trigger:nth-child(352):hover ~ .monitor .camera.o-x {
    transform: rotateX(64deg);
  }
  .trigger:nth-child(353):hover ~ .monitor .camera.o-y {
    transform: rotateY(-24deg);
  }
  .trigger:nth-child(353):hover ~ .monitor .camera.o-x {
    transform: rotateX(64deg);
  }
  .trigger:nth-child(354):hover ~ .monitor .camera.o-y {
    transform: rotateY(-32deg);
  }
  .trigger:nth-child(354):hover ~ .monitor .camera.o-x {
    transform: rotateX(64deg);
  }
  .trigger:nth-child(355):hover ~ .monitor .camera.o-y {
    transform: rotateY(-40deg);
  }
  .trigger:nth-child(355):hover ~ .monitor .camera.o-x {
    transform: rotateX(64deg);
  }
  .trigger:nth-child(356):hover ~ .monitor .camera.o-y {
    transform: rotateY(-48deg);
  }
  .trigger:nth-child(356):hover ~ .monitor .camera.o-x {
    transform: rotateX(64deg);
  }
  .trigger:nth-child(357):hover ~ .monitor .camera.o-y {
    transform: rotateY(-56deg);
  }
  .trigger:nth-child(357):hover ~ .monitor .camera.o-x {
    transform: rotateX(64deg);
  }
  .trigger:nth-child(358):hover ~ .monitor .camera.o-y {
    transform: rotateY(-64deg);
  }
  .trigger:nth-child(358):hover ~ .monitor .camera.o-x {
    transform: rotateX(64deg);
  }
  .trigger:nth-child(359):hover ~ .monitor .camera.o-y {
    transform: rotateY(-72deg);
  }
  .trigger:nth-child(359):hover ~ .monitor .camera.o-x {
    transform: rotateX(64deg);
  }
  .trigger:nth-child(360):hover ~ .monitor .camera.o-y {
    transform: rotateY(-80deg);
  }
  .trigger:nth-child(360):hover ~ .monitor .camera.o-x {
    transform: rotateX(64deg);
  }
  .trigger:nth-child(361):hover ~ .monitor .camera.o-y {
    transform: rotateY(72deg);
  }
  .trigger:nth-child(361):hover ~ .monitor .camera.o-x {
    transform: rotateX(72deg);
  }
  .trigger:nth-child(362):hover ~ .monitor .camera.o-y {
    transform: rotateY(64deg);
  }
  .trigger:nth-child(362):hover ~ .monitor .camera.o-x {
    transform: rotateX(72deg);
  }
  .trigger:nth-child(363):hover ~ .monitor .camera.o-y {
    transform: rotateY(56deg);
  }
  .trigger:nth-child(363):hover ~ .monitor .camera.o-x {
    transform: rotateX(72deg);
  }
  .trigger:nth-child(364):hover ~ .monitor .camera.o-y {
    transform: rotateY(48deg);
  }
  .trigger:nth-child(364):hover ~ .monitor .camera.o-x {
    transform: rotateX(72deg);
  }
  .trigger:nth-child(365):hover ~ .monitor .camera.o-y {
    transform: rotateY(40deg);
  }
  .trigger:nth-child(365):hover ~ .monitor .camera.o-x {
    transform: rotateX(72deg);
  }
  .trigger:nth-child(366):hover ~ .monitor .camera.o-y {
    transform: rotateY(32deg);
  }
  .trigger:nth-child(366):hover ~ .monitor .camera.o-x {
    transform: rotateX(72deg);
  }
  .trigger:nth-child(367):hover ~ .monitor .camera.o-y {
    transform: rotateY(24deg);
  }
  .trigger:nth-child(367):hover ~ .monitor .camera.o-x {
    transform: rotateX(72deg);
  }
  .trigger:nth-child(368):hover ~ .monitor .camera.o-y {
    transform: rotateY(16deg);
  }
  .trigger:nth-child(368):hover ~ .monitor .camera.o-x {
    transform: rotateX(72deg);
  }
  .trigger:nth-child(369):hover ~ .monitor .camera.o-y {
    transform: rotateY(8deg);
  }
  .trigger:nth-child(369):hover ~ .monitor .camera.o-x {
    transform: rotateX(72deg);
  }
  .trigger:nth-child(370):hover ~ .monitor .camera.o-y {
    transform: rotateY(0deg);
  }
  .trigger:nth-child(370):hover ~ .monitor .camera.o-x {
    transform: rotateX(72deg);
  }
  .trigger:nth-child(371):hover ~ .monitor .camera.o-y {
    transform: rotateY(-8deg);
  }
  .trigger:nth-child(371):hover ~ .monitor .camera.o-x {
    transform: rotateX(72deg);
  }
  .trigger:nth-child(372):hover ~ .monitor .camera.o-y {
    transform: rotateY(-16deg);
  }
  .trigger:nth-child(372):hover ~ .monitor .camera.o-x {
    transform: rotateX(72deg);
  }
  .trigger:nth-child(373):hover ~ .monitor .camera.o-y {
    transform: rotateY(-24deg);
  }
  .trigger:nth-child(373):hover ~ .monitor .camera.o-x {
    transform: rotateX(72deg);
  }
  .trigger:nth-child(374):hover ~ .monitor .camera.o-y {
    transform: rotateY(-32deg);
  }
  .trigger:nth-child(374):hover ~ .monitor .camera.o-x {
    transform: rotateX(72deg);
  }
  .trigger:nth-child(375):hover ~ .monitor .camera.o-y {
    transform: rotateY(-40deg);
  }
  .trigger:nth-child(375):hover ~ .monitor .camera.o-x {
    transform: rotateX(72deg);
  }
  .trigger:nth-child(376):hover ~ .monitor .camera.o-y {
    transform: rotateY(-48deg);
  }
  .trigger:nth-child(376):hover ~ .monitor .camera.o-x {
    transform: rotateX(72deg);
  }
  .trigger:nth-child(377):hover ~ .monitor .camera.o-y {
    transform: rotateY(-56deg);
  }
  .trigger:nth-child(377):hover ~ .monitor .camera.o-x {
    transform: rotateX(72deg);
  }
  .trigger:nth-child(378):hover ~ .monitor .camera.o-y {
    transform: rotateY(-64deg);
  }
  .trigger:nth-child(378):hover ~ .monitor .camera.o-x {
    transform: rotateX(72deg);
  }
  .trigger:nth-child(379):hover ~ .monitor .camera.o-y {
    transform: rotateY(-72deg);
  }
  .trigger:nth-child(379):hover ~ .monitor .camera.o-x {
    transform: rotateX(72deg);
  }
  .trigger:nth-child(380):hover ~ .monitor .camera.o-y {
    transform: rotateY(-80deg);
  }
  .trigger:nth-child(380):hover ~ .monitor .camera.o-x {
    transform: rotateX(72deg);
  }
  .trigger:nth-child(381):hover ~ .monitor .camera.o-y {
    transform: rotateY(72deg);
  }
  .trigger:nth-child(381):hover ~ .monitor .camera.o-x {
    transform: rotateX(80deg);
  }
  .trigger:nth-child(382):hover ~ .monitor .camera.o-y {
    transform: rotateY(64deg);
  }
  .trigger:nth-child(382):hover ~ .monitor .camera.o-x {
    transform: rotateX(80deg);
  }
  .trigger:nth-child(383):hover ~ .monitor .camera.o-y {
    transform: rotateY(56deg);
  }
  .trigger:nth-child(383):hover ~ .monitor .camera.o-x {
    transform: rotateX(80deg);
  }
  .trigger:nth-child(384):hover ~ .monitor .camera.o-y {
    transform: rotateY(48deg);
  }
  .trigger:nth-child(384):hover ~ .monitor .camera.o-x {
    transform: rotateX(80deg);
  }
  .trigger:nth-child(385):hover ~ .monitor .camera.o-y {
    transform: rotateY(40deg);
  }
  .trigger:nth-child(385):hover ~ .monitor .camera.o-x {
    transform: rotateX(80deg);
  }
  .trigger:nth-child(386):hover ~ .monitor .camera.o-y {
    transform: rotateY(32deg);
  }
  .trigger:nth-child(386):hover ~ .monitor .camera.o-x {
    transform: rotateX(80deg);
  }
  .trigger:nth-child(387):hover ~ .monitor .camera.o-y {
    transform: rotateY(24deg);
  }
  .trigger:nth-child(387):hover ~ .monitor .camera.o-x {
    transform: rotateX(80deg);
  }
  .trigger:nth-child(388):hover ~ .monitor .camera.o-y {
    transform: rotateY(16deg);
  }
  .trigger:nth-child(388):hover ~ .monitor .camera.o-x {
    transform: rotateX(80deg);
  }
  .trigger:nth-child(389):hover ~ .monitor .camera.o-y {
    transform: rotateY(8deg);
  }
  .trigger:nth-child(389):hover ~ .monitor .camera.o-x {
    transform: rotateX(80deg);
  }
  .trigger:nth-child(390):hover ~ .monitor .camera.o-y {
    transform: rotateY(0deg);
  }
  .trigger:nth-child(390):hover ~ .monitor .camera.o-x {
    transform: rotateX(80deg);
  }
  .trigger:nth-child(391):hover ~ .monitor .camera.o-y {
    transform: rotateY(-8deg);
  }
  .trigger:nth-child(391):hover ~ .monitor .camera.o-x {
    transform: rotateX(80deg);
  }
  .trigger:nth-child(392):hover ~ .monitor .camera.o-y {
    transform: rotateY(-16deg);
  }
  .trigger:nth-child(392):hover ~ .monitor .camera.o-x {
    transform: rotateX(80deg);
  }
  .trigger:nth-child(393):hover ~ .monitor .camera.o-y {
    transform: rotateY(-24deg);
  }
  .trigger:nth-child(393):hover ~ .monitor .camera.o-x {
    transform: rotateX(80deg);
  }
  .trigger:nth-child(394):hover ~ .monitor .camera.o-y {
    transform: rotateY(-32deg);
  }
  .trigger:nth-child(394):hover ~ .monitor .camera.o-x {
    transform: rotateX(80deg);
  }
  .trigger:nth-child(395):hover ~ .monitor .camera.o-y {
    transform: rotateY(-40deg);
  }
  .trigger:nth-child(395):hover ~ .monitor .camera.o-x {
    transform: rotateX(80deg);
  }
  .trigger:nth-child(396):hover ~ .monitor .camera.o-y {
    transform: rotateY(-48deg);
  }
  .trigger:nth-child(396):hover ~ .monitor .camera.o-x {
    transform: rotateX(80deg);
  }
  .trigger:nth-child(397):hover ~ .monitor .camera.o-y {
    transform: rotateY(-56deg);
  }
  .trigger:nth-child(397):hover ~ .monitor .camera.o-x {
    transform: rotateX(80deg);
  }
  .trigger:nth-child(398):hover ~ .monitor .camera.o-y {
    transform: rotateY(-64deg);
  }
  .trigger:nth-child(398):hover ~ .monitor .camera.o-x {
    transform: rotateX(80deg);
  }
  .trigger:nth-child(399):hover ~ .monitor .camera.o-y {
    transform: rotateY(-72deg);
  }
  .trigger:nth-child(399):hover ~ .monitor .camera.o-x {
    transform: rotateX(80deg);
  }
  .trigger:nth-child(400):hover ~ .monitor .camera.o-y {
    transform: rotateY(-80deg);
  }
  .trigger:nth-child(400):hover ~ .monitor .camera.o-x {
    transform: rotateX(80deg);
  }

  .camera {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: 500ms;
  }
  .camera.o-y {
    transform: rotateY(-30deg);
  }
  .vr {
    position: absolute;
    top: 30%;
    left: 0%;
    width: 450px;
    height: 450px;
    transform: translate(-50%, -50%);
    transform-style: preserve-3d;
  }
  .vr_layer {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    /* border: 1px solid rgba(255, 255, 255, 0.2); */
    /* background: rgba(0, 153, 255, 0.006);
    border-radius: 10px; */
    transform: preserve-3d;
  }
  .vr_layer:nth-child(1) {
    transform: translateZ(-157.5px);
  }
  .vr_layer:nth-child(1) .vr_layer_item {
    animation-delay: -210ms;
  }
  .vr_layer:nth-child(2) {
    transform: translateZ(-140px);
  }
  .vr_layer:nth-child(2) .vr_layer_item {
    animation-delay: -420ms;
  }
  .vr_layer:nth-child(3) {
    transform: translateZ(-122.5px);
  }
  .vr_layer:nth-child(3) .vr_layer_item {
    animation-delay: -630ms;
  }
  .vr_layer:nth-child(4) {
    transform: translateZ(-105px);
  }
  .vr_layer:nth-child(4) .vr_layer_item {
    animation-delay: -840ms;
  }
  .vr_layer:nth-child(5) {
    transform: translateZ(-87.5px);
  }
  .vr_layer:nth-child(5) .vr_layer_item {
    animation-delay: -1050ms;
  }
  .vr_layer:nth-child(6) {
    transform: translateZ(-70px);
  }
  .vr_layer:nth-child(6) .vr_layer_item {
    animation-delay: -1260ms;
  }
  .vr_layer:nth-child(7) {
    transform: translateZ(-52.5px);
  }
  .vr_layer:nth-child(7) .vr_layer_item {
    animation-delay: -1470ms;
  }
  .vr_layer:nth-child(8) {
    transform: translateZ(-35px);
  }
  .vr_layer:nth-child(8) .vr_layer_item {
    animation-delay: -1680ms;
  }
  .vr_layer:nth-child(9) {
    transform: translateZ(-17.5px);
  }
  .vr_layer:nth-child(9) .vr_layer_item {
    animation-delay: -1890ms;
  }
  .vr_layer:nth-child(10) {
    transform: translateZ(0px);
  }
  .vr_layer:nth-child(10) .vr_layer_item {
    animation-delay: -2100ms;
  }
  .vr_layer:nth-child(11) {
    transform: translateZ(17.5px);
  }
  .vr_layer:nth-child(11) .vr_layer_item {
    animation-delay: -2310ms;
  }
  .vr_layer:nth-child(12) {
    transform: translateZ(35px);
  }
  .vr_layer:nth-child(12) .vr_layer_item {
    animation-delay: -2520ms;
  }
  .vr_layer:nth-child(13) {
    transform: translateZ(52.5px);
  }
  .vr_layer:nth-child(13) .vr_layer_item {
    animation-delay: -2730ms;
  }
  .vr_layer:nth-child(14) {
    transform: translateZ(70px);
  }
  .vr_layer:nth-child(14) .vr_layer_item {
    animation-delay: -2940ms;
  }
  .vr_layer:nth-child(15) {
    transform: translateZ(87.5px);
  }
  .vr_layer:nth-child(15) .vr_layer_item {
    animation-delay: -3150ms;
  }
  .vr_layer:nth-child(16) {
    transform: translateZ(105px);
  }
  .vr_layer:nth-child(16) .vr_layer_item {
    animation-delay: -3360ms;
  }
  .vr_layer:nth-child(17) {
    transform: translateZ(122.5px);
  }
  .vr_layer:nth-child(17) .vr_layer_item {
    animation-delay: -3570ms;
  }
  .vr_layer:nth-child(18) {
    transform: translateZ(140px);
  }
  .vr_layer:nth-child(18) .vr_layer_item {
    animation-delay: -3780ms;
  }
  .vr_layer:nth-child(19) {
    transform: translateZ(157.5px);
  }
  .vr_layer:nth-child(19) .vr_layer_item {
    animation-delay: -3990ms;
  }
  .vr_layer:nth-child(20) {
    transform: translateZ(175px);
  }
  .vr_layer:nth-child(20) .vr_layer_item {
    animation-delay: -4200ms;
  }
  .vr_layer_item {
    width: 80%;
    height: 80%;
    border: 1px solid #fff;
    border-radius: 100%;
    background: rgba(0, 0, 0, 0.5);
    animation: ${sphere} 3000ms cubic-bezier(0.215, 0.61, 0.355, 1) alternate
        infinite,
      ${color} 5000ms linear alternate infinite;
    transition: 500ms;
  }
`;