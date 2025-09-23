<script setup lang="ts">
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

import { withBase } from 'vitepress'
import { data as oldMembersData, type OldMembersData } from './old-members-data.data'

interface SocialLink {
  icon: SocialLinkIcon
  link: string
  ariaLabel?: string
}

type SocialLinkIcon =
  | 'discord'
  | 'facebook'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'mastodon'
  | 'npm'
  | 'slack'
  | 'twitter'
  | 'x'
  | 'youtube'
  | { svg: string }

interface TeamMember {
  // 成员的头像图像
  avatar: string

  // 成员的名称
  name: string

  // 成员姓名下方的标题
  // 例如：Developer, Software Engineer, etc.
  title?: string

  // 成员所属的组织
  org?: string

  // 组织的 URL
  orgLink?: string

  // 成员的描述
  desc?: string

  // 社交媒体链接，例如 GitHub、Twitter 等，可以在此处传入 Social Links 对象
  // 参见: https://vitepress.dev/reference/default-theme-config.html#sociallinks
  links?: SocialLink[]

  // 成员 sponsor 页面的 URL
  sponsor?: string

  // sponsor 链接的文本，默认为 'Sponsor'
  actionText?: string
}

// 类型断言，告诉 TypeScript oldMembersData 的实际类型
const data = oldMembersData as unknown as OldMembersData

const leaders: TeamMember[] = processMembers(data.leaders)
const devbranch: TeamMember[] = processMembers(data.devbranch)
const cybersec: TeamMember[] = processMembers(data.cybersec)
const opergroup: TeamMember[] = processMembers(data.opergroup)
const publicity: TeamMember[] = processMembers(data.publicity)
const secretariat: TeamMember[] = processMembers(data.secretariat)
const friends: TeamMember[] = processMembers(data.friends)

function processMembers(members: any[]): TeamMember[] {
  return members.map(member => ({
    ...member,
    avatar: member.avatar.startsWith('/') 
      ? member.avatar  // 如果以/开头，直接使用（已经是完整路径）
      : member.avatar.startsWith('http') 
        ? member.avatar  // 如果是外部链接，直接使用
        : withBase('/' + member.avatar),  // 否则添加withBase处理
    links: member.links?.map((link: any) => {
      if (link.icon === 'qq' && link.uin) {
        return getQQLink(link.uin)
      } else if (link.icon === 'email' && link.email) {
        return emailIcon(link.email)
      } else {
        return link
      }
    }) || []
  }))
}

function getAvatars(name: string): string {
  return withBase('/avatars/' + name + '.png');
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
</script>

<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>
        往届成员
      </template>
      <template #lead>
        第{{ data.session || '八' }}届燕山大学大学生网络信息协会
      </template>
    </VPTeamPageTitle>
    <VPTeamPageSection v-if="leaders.length > 0">
      <template #title>主席团</template>
      <template #members>
        <VPTeamMembers :members="leaders" />
      </template>
    </VPTeamPageSection>
    <VPTeamPageSection v-if="devbranch.length > 0">
      <template #title>开发部</template>
      <template #members>
        <VPTeamMembers size="small" :members="devbranch" />
      </template>
    </VPTeamPageSection>
    <VPTeamPageSection v-if="cybersec.length > 0">
      <template #title>网络安全部</template>
      <template #members>
        <VPTeamMembers size="small" :members="cybersec" />
      </template>
    </VPTeamPageSection>
    <VPTeamPageSection v-if="opergroup.length > 0">
      <template #title>运维部</template>
      <template #members>
        <VPTeamMembers size="small" :members="opergroup" />
      </template>
    </VPTeamPageSection>
    <VPTeamPageSection v-if="publicity.length > 0">
      <template #title>组宣部</template>
      <template #members>
        <VPTeamMembers size="small" :members="publicity" />
      </template>
    </VPTeamPageSection>
    <VPTeamPageSection v-if="secretariat.length > 0">
      <template #title>秘书处</template>
      <template #members>
        <VPTeamMembers size="small" :members="secretariat" />
      </template>
    </VPTeamPageSection>
    <VPTeamPageSection v-if="friends.length > 0">
      <template #title>特邀成员</template>
      <template #members>
        <VPTeamMembers size="small" :members="friends" />
      </template>
    </VPTeamPageSection>
  </VPTeamPage>
</template>