<script setup lang="ts">
import {
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamMembers
} from 'vitepress/theme'

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

const members: TeamMember[] = [
    {
        avatar: '/avatars/xiaobai.jpg',
        name: '小白',
        title: '第一届主席',
        links: [
            {
                icon: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M0 2.75a1.5 1.5 0 0 1 1.5-1.5h11a1.5 1.5 0 0 1 1.5 1.5v.342L7.383 7.504A.7.7 0 0 1 7 7.607a.7.7 0 0 1-.383-.103L0 3.092zm0 1.844v6.656a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V4.594L8.073 8.546l-.005.004A1.97 1.97 0 0 1 7 8.857c-.375 0-.753-.102-1.068-.307l-.005-.004z" clip-rule="evenodd"/></svg>' // https://yesicon.app/streamline/mail-send-envelope-solid
                },
                link: 'mailto:baichenhan1998@qq.com'
            }
        ],
        desc: '2020年PAC铜奖<br>2022年ACM-IPCC当届唯一金奖<br>2024年硕士毕业于中国科学院大学<br>现任清程极智大模型算子优化工程师'
    },
    {
        avatar: 'https://www.github.com/reecho-tsai.png',
        name: 'reecho-tsai',
        title: '第六届主席',
        links: [
            { icon: 'github', link: 'https://github.com/reecho-tsai' },
            //   { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
        ],
        desc: '软件工程专业 <br> 2023年保送上海交通大学攻读博士'
    },
    {
        avatar: 'https://www.github.com/qfpqhyl.png',
        name: 'qfpqhyl',
        title: '第七届网安部主席',
        links: [
            { icon: 'github', link: 'https://github.com/qfpqhyl' },
            {
                icon: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 15 15"><path fill="currentColor" d="M1.5 3a7.5 7.5 0 1 1-.634 1h1.262l2.893 9.644a.5.5 0 0 0 .957.003l1.541-5.01l1.502 5.007a.5.5 0 0 0 .943.042l3.53-8.827a2.15 2.15 0 0 0-.705-2.517l-.132-.1a1.929 1.929 0 0 0-2.7 2.7l.643.858l.8-.6l-.643-.857a.929.929 0 0 1 1.3-1.3l.132.099c.416.312.57.863.377 1.345l-2.999 7.498L7.172 4H8V3H5v1h1.128l.875 2.916l-1.497 4.864L3.172 4H4V3z"/></svg>' // https://yesicon.app/teenyicons/wordpress-solid
                },
                link: 'https://qfpqhyl.github.io/'
            }
        ],
        desc: '光电子专业<br>2024年获得保研资格，去向待定'
    },
    {
        avatar: '/avatars/aji.jpg',
        name: '阿吉',
        title: '第六届运维部主席',
        desc: '电子信息工程专业<br>2024年考研至中国民航大学',
        links: [
            { icon: 'github', link: 'https://github.com/aji-li' }
        ]
    }
]
</script>

<template>
    <VPTeamPage>
        <VPTeamPageTitle>
            <template #title>
                网协名人堂
            </template>
            <template #lead>
                这里记载了优秀的前辈们，他们是网协的骄傲
            </template>
        </VPTeamPageTitle>
        <VPTeamMembers :members="members" />
    </VPTeamPage>
</template>