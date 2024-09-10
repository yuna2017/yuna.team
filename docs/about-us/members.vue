<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'
const leaders = [
  {
    avatar: 'https://www.github.com/KamijoToma.png',
    name: 'SkyRain',
    title: '主席',
    links: [
      { icon: 'github', link: 'https://github.com/KamijioToma' },
      //   { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://github.com/TrisuyaN.png',
    name: 'TrisuyaN',
    title: '开发部副主席',
    links: [
      { icon: 'github', link: 'https://github.com/TrisuyaN' }
    ]
  },
  {
    avatar: 'https://github.com/255doesnotexist.png',
    name: '255',
    title: '特邀成员',
    links: [
      { icon: 'github', link: 'https://github.com/255doesnotexist' }
    ]
  }
]
</script>

<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>
        协会成员
      </template>
      <template #lead>
        主席团
      </template>
    </VPTeamPageTitle>
    <VPTeamMembers :members="leaders" />
    <VPTeamPageTitle>
      <template #lead>
        开发部
      </template>
    </VPTeamPageTitle>
    <VPTeamPageTitle>
      <template #lead>
        网安部
      </template>
    </VPTeamPageTitle>
    <VPTeamPageTitle>
      <template #lead>
        运维部
      </template>
    </VPTeamPageTitle>
    <VPTeamPageTitle>
      <template #lead>
        组宣部
      </template>
    </VPTeamPageTitle>
    <VPTeamPageTitle>
      <template #lead>
        秘书处
      </template>
    </VPTeamPageTitle>
  </VPTeamPage>
</template>