<template>
  <div class="footer-container">
    <div class="footer-div">
      <div class="left-footer-container">
        <ul class="left-footer-list">
          <li class="about-us">
            <a
              class="anchor"
              :class="$store.state.nightMode ? '' : 'a-light'"
              href="https://github.com/SkylabCoders/David-Galvez_Front-Final-Project-202109"
              >About us
            </a>
          </li>
          <li class="help">
            <a
              class="anchor"
              :class="$store.state.nightMode ? '' : 'a-light'"
              href="https://github.com/SkylabCoders/David-Galvez_Front-Final-Project-202109"
              >Help</a
            >
          </li>
          <li class="others">
            <a
              class="anchor"
              :class="$store.state.nightMode ? '' : 'a-light'"
              href="https://github.com/SkylabCoders/David-Galvez_Front-Final-Project-202109"
              >Others</a
            >
          </li>
        </ul>
      </div>
      <div class="right-footer-container">
        <div class="contact-us-container">
          <p class="contact-us">Contact us:</p>
        </div>
        <div class="social-webs-container">
          <ul class="social-web-list">
            <li class="instagram-list-item">
              <a href="https://www.instagram.com/"
                ><img
                  src="../../public/instagram.png"
                  height="55"
                  alt="instagram link"
              /></a>
            </li>
            <li class="twitter-list-item">
              <a href="https://twitter.com/"
                ><img
                  src="../../public/twitter.png"
                  height="40"
                  alt="twitter link"
              /></a>
            </li>
            <li class="youtube-list-item">
              <a href="https://www.youtube.com/"
                ><img
                  src="../../public/youtube.png"
                  height="40"
                  alt="youtube link"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom-footer-container">
      <h3 class="footer-copyright">2021 All rights reserved - VueGComps</h3>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style scoped lang="scss">
@import "./src/styles/variables";
.footer-div {
  display: flex;
  justify-content: space-between;
  height: 110px;
  width: 90vw;
}
.left-footer-container {
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  width: 150px;
  width: 30%;
}
.about-us,
.help,
.others {
  margin-bottom: 15px;
}
.anchor {
  text-decoration: none;
  color: $textColor;
  &:hover {
    color: $mainColor;
  }
}
.right-footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contact-us-container {
  margin-top: 10px;
  height: 30%;
}
.social-web-list {
  display: flex;
  list-style: none;
  align-items: center;
  height: 60%;
}
.left-footer-list {
  list-style: none;
  padding: 10px;
}
.footer-copyright {
  margin: 15px 30px 0 30px;
  border-top: solid $mainColor 2px;
  text-align: center;
  padding: 10px 0;
  font-size: 16px;
}
.instagram-list-item,
.twitter-list-item,
.youtube-list-item {
  &:hover {
    transform: scale(1.1);
  }
}
.a-light {
  color: $lightTextColor;
}
@media (min-width: 1000px) {
  .left-footer-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .about-us,
  .help,
  .others {
    margin-top: 40px;
  }
}
</style>
