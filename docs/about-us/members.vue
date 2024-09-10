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

const devbranch = [

]

const cybersec = [

]

const opergroup = [

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
    title: '特邀成员',
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
    <VPTeamMembers :members="devbranch" />
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