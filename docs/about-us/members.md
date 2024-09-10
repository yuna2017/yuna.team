---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
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
  },
  {
    avatar: 'https://github.com/miaooo0000OOOO.png',
    name: 'Miaooo',
    title: '运维部部长',
    links: [
        { icon: 'github', link: 'https://github.com/miaooo0000OOOO' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      协会成员
    </template>
    <template #lead>
      第八届网络信息协会成员名单
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
