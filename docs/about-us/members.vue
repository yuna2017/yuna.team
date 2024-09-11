<script setup lang="ts">
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const leaders = [
  {
    avatar: 'https://www.github.com/KamijoToma.png',
    name: 'SkyRain',
    desc: 'I am changing my future, not my past',
    title: '主席',
    links: [
      { icon: 'github', link: 'https://github.com/KamijioToma' },
      //   { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://github.com/TrisuyaN.png',
    name: 'TrisuyaN',
    desc: 'to save the 瓦鲁多',
    title: '开发部副主席',
    links: [
      { icon: 'github', link: 'https://github.com/TrisuyaN' }
    ]
  },
]

function getAvatars(name: string): string {
  return '/avatars/' + name + '.png';
}

function emailIcon(email: string) {
  return {
    icon: {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M0 2.75a1.5 1.5 0 0 1 1.5-1.5h11a1.5 1.5 0 0 1 1.5 1.5v.342L7.383 7.504A.7.7 0 0 1 7 7.607a.7.7 0 0 1-.383-.103L0 3.092zm0 1.844v6.656a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V4.594L8.073 8.546l-.005.004A1.97 1.97 0 0 1 7 8.857c-.375 0-.753-.102-1.068-.307l-.005-.004z" clip-rule="evenodd"/></svg>' // https://yesicon.app/streamline/mail-send-envelope-solid
    },
    link: 'mailto:' + email
  }
}

function getQQLink(uin: string) {
  return {
    icon: {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 32 32">
  <path d="M29.11 26.278c-0.72 0.087-2.804-3.296-2.804-3.296 0 1.959-1.009 4.515-3.191 6.362 1.052 0.325 3.428 1.198 2.863 2.151-0.457 0.772-7.844 0.493-9.977 0.252-2.133 0.24-9.52 0.519-9.977-0.252-0.565-0.953 1.807-1.826 2.861-2.151-2.182-1.846-3.191-4.403-3.191-6.362 0 0-2.083 3.384-2.804 3.296-0.335-0.041-0.776-1.853 0.584-6.231 0.641-2.064 1.375-3.78 2.509-6.611-0.191-7.306 2.828-13.435 10.016-13.435 7.109 0.001 10.197 6.008 10.017 13.435 1.132 2.826 1.869 4.553 2.509 6.611 1.361 4.379 0.92 6.191 0.584 6.231z"/>
</svg>`
    },
    link: 'http://wpa.qq.com/msgrd?v=3&uin=' + uin + '&site=qq&menu=yes'
  }
}

const devbranch = [
  {
    avatar: getAvatars('Plato'),
    name: 'Plato',
    desc: '嗯？',
    title: '开发部部长',
    links: [
      emailIcon('abc39757785aa@gmail.com')
    ]
  },
  {
    avatar: getAvatars('Q-Scholar'),
    name: 'Q-Scholar',
    desc: '摸个鱼先',
    title: '开发部部长',
    links: [
      getQQLink('36216093')
    ]
  }
]

const cybersec = [

]

const opergroup = [
  {
    avatar: getAvatars('miaooo'),
    name: 'Miaooo',
    desc: ['In Rust We Trust', '脑子锈住了'][Math.floor(Math.random() * 100) < 20 ? 0 : 1],
    title: '运维部部长',
    links: [
      getQQLink('1683618861'),
      { icon: 'github', link: 'https://github.com/miaooo0000oooo' }
    ]
  },
]

const publicity = [

]

const secretariat = [

]

import { ref } from 'vue'

const friends = ref([
  {
    avatar: 'https://github.com/255doesnotexist.png',
    name: '255',
    desc: 'loading...', // placeholder
    title: ['特邀成员', '特邀网络大王'][Math.random() * 1.01 | 0],
    links: [
      { icon: 'github', link: 'https://github.com/255doesnotexist' }
    ]
  }
]);

fetch(['https://v1.hitokoto.cn/?c=a', 'https://v1.hitokoto.cn/?c=d',
  'https://v1.hitokoto.cn/?c=k'][Math.random() * 2 | 0])
  .then(response => response.json())
  .then(data => {
    const friendIndex = friends.value.findIndex(friend => friend.name === '255');
    if (friendIndex !== -1) {
      friends.value[friendIndex].desc = [
        'is it that weird not wanting a label?',
        'is it thawat wuwueird not wawanting a lawabel?',
        data.from_who
          ? `我没什么好说的。但是「${data.hitokoto}」${data.from}的${data.from_who}如是说。`
          : `我不知道说点什么。但是「${data.hitokoto}」${data.from}这么说了。`
      ][Math.random() * 3 | 0];
    }
  })
  .catch(error => {
    console.error('Error fetching hitokoto:', error);
    friends[0].desc = '这里本就没什么一言。';
  });
</script>

<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>
        协会成员
      </template>
      <template #lead>
        第八届燕山大学大学生网络信息协会
      </template>
    </VPTeamPageTitle>
    <VPTeamPageSection>
      <template #title>主席团</template>
      <!-- <template #lead></template> -->
      <template #members>
        <VPTeamMembers :members="leaders" />
      </template>
    </VPTeamPageSection>
    <VPTeamPageSection>
      <template #title>开发部</template>
      <!-- <template #lead></template> -->
      <template #members>
        <VPTeamMembers size="small" :members="devbranch" />
      </template>
    </VPTeamPageSection>
    <VPTeamPageSection>
      <template #title>网络安全部</template>
      <!-- <template #lead></template> -->
      <template #members>
        <VPTeamMembers size="small" :members="cybersec" />
      </template>
    </VPTeamPageSection>
    <VPTeamPageSection>
      <template #title>运维部</template>
      <!-- <template #lead></template> -->
      <template #members>
        <VPTeamMembers size="small" :members="opergroup" />
      </template>
    </VPTeamPageSection>
    <VPTeamPageSection>
      <template #title>组宣部</template>
      <!-- <template #lead></template> -->
      <template #members>
        <VPTeamMembers size="small" :members="publicity" />
      </template>
    </VPTeamPageSection>
    <VPTeamPageSection>
      <template #title>秘书处</template>
      <!-- <template #lead></template> -->
      <template #members>
        <VPTeamMembers size="small" :members="secretariat" />
      </template>
    </VPTeamPageSection>
    <VPTeamPageSection>
      <template #title>特邀成员</template>
      <!-- <template #lead></template> -->
      <template #members>
        <VPTeamMembers size="small" :members="friends" />
      </template>
    </VPTeamPageSection>
  </VPTeamPage>
</template>