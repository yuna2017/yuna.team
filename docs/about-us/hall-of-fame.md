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
    avatar: 'https://www.github.com/reecho-tsai.png',
    name: 'reecho-tsai',
    title: '第六届主席',
    links: [
      { icon: 'github', link: 'https://github.com/reecho-tsai' },
    //   { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ],
    desc: '软件工程专业，现保送入上海交通大学攻读博士'
  },
  {
    avatar: 'https://www.github.com/qfpqhyl.png',
    name: 'qfpqhyl',
    title: '第六届网安部部长、第七届网安部副主席',
    links: [
      { icon: 'github', link: 'https://github.com/qfpqhyl' },
      {
        icon: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 15 15"><path fill="currentColor" d="M1.5 3a7.5 7.5 0 1 1-.634 1h1.262l2.893 9.644a.5.5 0 0 0 .957.003l1.541-5.01l1.502 5.007a.5.5 0 0 0 .943.042l3.53-8.827a2.15 2.15 0 0 0-.705-2.517l-.132-.1a1.929 1.929 0 0 0-2.7 2.7l.643.858l.8-.6l-.643-.857a.929.929 0 0 1 1.3-1.3l.132.099c.416.312.57.863.377 1.345l-2.999 7.498L7.172 4H8V3H5v1h1.128l.875 2.916l-1.497 4.864L3.172 4H4V3z"/></svg>' // https://yesicon.app/teenyicons/wordpress-solid
        },
        link: 'https://qfpqhyl.github.io/'
      }
    ],
    desc: '光电子专业，获得保研资格，去向暂定'
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      网协名人堂
    </template>
    <template #lead>
      这里记载了优秀的前辈们，他们是网协的骄傲
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
