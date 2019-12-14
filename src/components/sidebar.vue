<template>
  <aside id="sideBar">
    <div class="flex justify-content-space-between farm-cred">
      <p><strong>Farm name</strong></p>
      <p class="menuTrigger">
        <i class="material-icons">close</i>
      </p>
    </div>
    <menu class="flex column nowrap">
      <router-link to="/">
        <i class="material-icons">grain</i> overview
      </router-link>
      <router-link to="/">
        <i class="material-icons">shopping_basket</i> Sale
      </router-link>
      <router-link to="/">
        <i class="material-icons">store_mall_directory</i> Purchases
      </router-link>
      <a class="flex justify-content-flex-start column nowrap has-submenu" href="fdf">
        <p class="flex align-items-center trigger">
          <i class="material-icons">bar_chart</i> Production
        </p>
        <menu class="flex column nowrap submenu">
          <router-link to="/">
            <i class="material-icons">adjust</i> Feeding
          </router-link>
          <router-link to="/">
            <i class="material-icons">adjust</i> Mortality
          </router-link>
          <router-link to="/">
            <i class="material-icons">adjust</i> Sampling
          </router-link>
          <router-link to="/">
            <i class="material-icons">adjust</i> Transfer
          </router-link>
          <router-link to="/">
            <i class="material-icons">adjust</i> Maintenance
          </router-link>
        </menu>
      </a>
      <router-link to="/">
        <i class="material-icons">style</i> Dominoes
      </router-link>
      <a class="flex justify-content-flex-start column nowrap has-submenu" href="fdf">
        <p class="flex align-items-center trigger">
          <i class="material-icons">emoji_transportation</i> Master
        </p>
        <menu class="flex column nowrap submenu">
          <router-link to="/">
            <i class="material-icons">style</i> Feeding
          </router-link>
          <router-link to="/">
            <i class="material-icons">style</i> Mortality
          </router-link>
          <router-link to="/">
            <i class="material-icons">style</i> Sampling
          </router-link>
          <router-link to="/">
            <i class="material-icons">style</i> Transfer
          </router-link>
          <router-link to="/">
            <i class="material-icons">style</i> Maintenance
          </router-link>
        </menu>
      </a>
    </menu>
  </aside>
</template>
<style lang="scss" scoped>
aside {
  position: absolute;
  min-width: 250px;
  margin-left: -250px;
  background: #FFF;
  height: 100vh;
  overflow: hidden;
  a {
    color: #404040;
    padding: 10px 20px;
    display: flex;
    font-size: 17px;
    align-items: center;
    i {
      margin-right: 7px;
    }
  }
  .farm-cred {
    padding: 15px 20px;
    margin-bottom: 25px;
  }
  a.has-submenu {
    align-items: flex-start;
    padding: 0;
    p {
      padding: 10px 20px;
    }
    .submenu {
      display: none;
      padding: 10px 0;
      background: #ececec;
      width: 100%;
    }
    .submenu.activity {
      display: flex;
    }
  }
}
aside.open {
  margin-left: 0;
}
</style>
<script>
export default {
  mounted() {
    this.toggleSubmenu();
  },
  methods: {
    toggleSubmenu() {
      const alink = document.querySelectorAll('a.has-submenu p.trigger');
      for (let i = 0; i < alink.length; i += 1) {
        alink[i].addEventListener('click', (e) => {
          e.preventDefault();
          const submenu = document.querySelectorAll('.submenu');
          for (let j = 0; j < submenu.length; j += 1) {
            if (submenu[j] !== alink[i].nextSibling && submenu[j].classList.contains('activity')) {
              submenu[j].classList.remove('activity');
            }
          }
          if (alink[i].nextSibling.tagName === 'MENU') {
            const currentSubmenu = alink[i].nextSibling;
            currentSubmenu.classList.toggle('activity');
          }
        });
      }
    },
  },
};
</script>
