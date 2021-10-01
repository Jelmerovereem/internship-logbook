import styled from "styled-components";
import { Colors } from "../components/UI/Colors";

const SVG = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  path {
    fill: ${Colors.primaryDark};
  }

  path:nth-child(4) {
      transition: all 0.5s;
      opacity: 0;
      stroke: #ff007a;
  }

  &:hover {
    path {
      //fill: red;
    }
  }
`;

const Logo = () => (
  <SVG
    viewBox="0 0 276 276"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M42.0703 66.8549V66.7066C42.0703 51.3909 53.5306 38.8291 69.8631 38.8291C79.7982 38.8291 85.7932 42.3032 90.962 47.2178L84.8823 54.2295C80.5608 50.2258 75.9428 47.5355 69.7996 47.5355C59.5679 47.5355 52.0266 56.0089 52.0266 66.5583V66.7066C52.0266 77.256 59.4832 85.7929 69.7996 85.7929C76.43 85.7929 80.6456 83.1662 85.2636 78.8659L91.3433 85.0303C85.7296 90.8769 79.5652 94.5841 69.4818 94.5841C53.7636 94.5841 42.0703 82.34 42.0703 66.8549Z"
      fill="white"
    />
    <path
      d="M66.707 133.414C29.9324 133.414 0 103.503 0 66.7069C0 29.9111 29.9324 0 66.707 0C103.482 0 133.414 29.9111 133.414 66.7069C133.414 103.503 103.482 133.414 66.707 133.414ZM66.707 8.26157C34.4868 8.26157 8.26159 34.4868 8.26159 66.7069C8.26159 98.927 34.4868 125.152 66.707 125.152C98.9272 125.152 125.152 98.9482 125.152 66.7069C125.152 34.4868 98.9484 8.26157 66.707 8.26157Z"
      fill="white"
    />
    <path
      d="M66.707 276C29.9324 276 0 246.089 0 209.293C0 172.518 29.9112 142.586 66.707 142.586C103.482 142.586 133.414 172.497 133.414 209.293C133.414 246.089 103.482 276 66.707 276ZM66.707 150.848C34.4868 150.848 8.26159 177.073 8.26159 209.293C8.26159 241.513 34.4868 267.738 66.707 267.738C98.9272 267.738 125.152 241.534 125.152 209.293C125.152 177.073 98.9484 150.848 66.707 150.848Z"
      fill="white"
    />
    <path d="M19 256L267 39" stroke="black" stroke-width="10" />
    <path
      d="M47.3242 182.348H67.4062C84.3319 182.348 96.0464 193.977 96.0464 209.145V209.293C96.0464 224.46 84.3531 236.238 67.4062 236.238H47.3242V182.348ZM56.7933 190.969V227.617H67.4062C78.7183 227.617 86.1113 219.991 86.1113 209.441V209.293C86.1113 198.744 78.7183 190.969 67.4062 190.969H56.7933Z"
      fill="white"
    />
    <path
      d="M209.293 133.414C172.518 133.414 142.586 103.503 142.586 66.7069C142.586 29.9111 172.518 0 209.293 0C246.068 0 276 29.9111 276 66.7069C276 103.503 246.089 133.414 209.293 133.414ZM209.293 8.26157C177.073 8.26157 150.848 34.4868 150.848 66.7069C150.848 98.927 177.073 125.152 209.293 125.152C241.513 125.152 267.738 98.927 267.738 66.7069C267.76 34.4868 241.534 8.26157 209.293 8.26157Z"
      fill="white"
    />
    <path
      d="M189.869 182.348H229.821V190.821H199.338V204.823H226.368V213.297H199.338V227.765H230.203V236.238H189.869V182.348Z"
      fill="white"
    />
    <path
      d="M209.293 276C172.518 276 142.586 246.089 142.586 209.293C142.586 172.518 172.497 142.586 209.293 142.586C246.068 142.586 276 172.497 276 209.293C276 246.089 246.089 276 209.293 276ZM209.293 150.848C177.073 150.848 150.848 177.073 150.848 209.293C150.848 241.513 177.073 267.738 209.293 267.738C241.513 267.738 267.738 241.513 267.738 209.293C267.76 177.073 241.534 150.848 209.293 150.848Z"
      fill="white"
    />
  </SVG>

  //   <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 276" class="f-logo">
  //     <path
  //       d="M209.293 133.414C172.518 133.414 142.586 103.503 142.586 66.7069C142.586 29.9111 172.518 0 209.293 0C246.068 0 276 29.9111 276 66.7069C276 103.503 246.089 133.414 209.293 133.414ZM209.293 8.26157C177.073 8.26157 150.848 34.4868 150.848 66.7069C150.848 98.927 177.073 125.152 209.293 125.152C241.513 125.152 267.738 98.927 267.738 66.7069C267.76 34.4868 241.534 8.26157 209.293 8.26157Z"
  //       fill="white"
  //     ></path>
  //     <path
  //       d="M42.0703 66.8549V66.7066C42.0703 51.3909 53.5306 38.8291 69.8631 38.8291C79.7982 38.8291 85.7932 42.3032 90.962 47.2178L84.8823 54.2295C80.5608 50.2258 75.9428 47.5355 69.7996 47.5355C59.5679 47.5355 52.0266 56.0089 52.0266 66.5583V66.7066C52.0266 77.256 59.4832 85.7929 69.7996 85.7929C76.43 85.7929 80.6456 83.1662 85.2636 78.8659L91.3433 85.0303C85.7296 90.8769 79.5652 94.5841 69.4818 94.5841C53.7636 94.5841 42.0703 82.34 42.0703 66.8549Z"
  //       fill="white"
  //     ></path>
  //     <path
  //       d="M66.707 133.414C29.9324 133.414 0 103.503 0 66.7069C0 29.9111 29.9324 0 66.707 0C103.482 0 133.414 29.9111 133.414 66.7069C133.414 103.503 103.482 133.414 66.707 133.414ZM66.707 8.26157C34.4868 8.26157 8.26159 34.4868 8.26159 66.7069C8.26159 98.927 34.4868 125.152 66.707 125.152C98.9272 125.152 125.152 98.9482 125.152 66.7069C125.152 34.4868 98.9484 8.26157 66.707 8.26157Z"
  //       fill="white"
  //     ></path>
  //     <path
  //       d="M47.3242 182.348H67.4062C84.3319 182.348 96.0464 193.977 96.0464 209.145V209.293C96.0464 224.46 84.3531 236.238 67.4062 236.238H47.3242V182.348ZM56.7933 190.969V227.617H67.4062C78.7183 227.617 86.1113 219.991 86.1113 209.441V209.293C86.1113 198.744 78.7183 190.969 67.4062 190.969H56.7933Z"
  //       fill="white"
  //     ></path>
  //     <path
  //       d="M189.869 182.348H229.821V190.821H199.338V204.823H226.368V213.297H199.338V227.765H230.203V236.238H189.869V182.348Z"
  //       fill="white"
  //     ></path>
  //     <path
  //       d="M209.293 276C172.518 276 142.586 246.089 142.586 209.293C142.586 172.518 172.497 142.586 209.293 142.586C246.068 142.586 276 172.497 276 209.293C276 246.089 246.089 276 209.293 276ZM209.293 150.848C177.073 150.848 150.848 177.073 150.848 209.293C150.848 241.513 177.073 267.738 209.293 267.738C241.513 267.738 267.738 241.513 267.738 209.293C267.76 177.073 241.534 150.848 209.293 150.848Z"
  //       fill="white"
  //     ></path>
  //     <path
  //       d="M66.707 276C29.9324 276 0 246.089 0 209.293C0 172.518 29.9112 142.586 66.707 142.586C103.482 142.586 133.414 172.497 133.414 209.293C133.414 246.089 103.482 276 66.707 276ZM66.707 150.848C34.4868 150.848 8.26159 177.073 8.26159 209.293C8.26159 241.513 34.4868 267.738 66.707 267.738C98.9272 267.738 125.152 241.534 125.152 209.293C125.152 177.073 98.9484 150.848 66.707 150.848Z"
  //       fill="white"
  //     ></path>
  //   </SVG>
);

export default Logo;
