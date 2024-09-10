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

const friends = [
  {
    avatar: 'https://github.com/255doesnotexist.png',
    name: '255',
    desc: 'is it that weird not wanting a label',
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