import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

// 触发热更新

interface SocialLink {
  icon: SocialLinkIcon
  link?: string
  uin?: string
  email?: string
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
  | 'qq'
  | 'email'
  | { svg: string }

interface TeamMember {
  avatar: string
  name: string
  title?: string
  org?: string
  orgLink?: string
  desc?: string
  links?: SocialLink[]
  sponsor?: string
  actionText?: string
}

interface OldMembersData {
  title?: string
  session?: string
  leaders: TeamMember[]
  devbranch: TeamMember[]
  cybersec: TeamMember[]
  opergroup: TeamMember[]
  publicity: TeamMember[]
  secretariat: TeamMember[]
  friends: TeamMember[]
}

export default {
  load(): OldMembersData {
    const filePath = path.resolve(__dirname, 'old-members-data.md')
    const content = fs.readFileSync(filePath, 'utf-8')
    
    // 提取标题
    const titleMatch = content.match(/^#\s+(.+)$/m)
    const title = titleMatch ? titleMatch[1] : undefined
    
    // 提取届次信息
    const sessionMatch = content.match(/##\s+第(.+?)届成员/m)
    const session = sessionMatch ? sessionMatch[1] : undefined
    

    // 提取所有YAML代码块 - 修复正则表达式
    const yamlBlocks = content.match(/```yaml\n([\s\S]*?)\n```/g) || []
    
    // 尝试不同的正则表达式
    const altRegex = /```yaml\r?\n([\s\S]*?)\r?\n```/g
    const altBlocks = content.match(altRegex) || []
    
    // 使用找到的块
    const finalBlocks = yamlBlocks.length > 0 ? yamlBlocks : altBlocks

    
    const result: OldMembersData = {
      title,
      session,
      leaders: [],
      devbranch: [],
      cybersec: [],
      opergroup: [],
      publicity: [],
      secretariat: [],
      friends: []
    }
    
    // 解析每个YAML块
    finalBlocks.forEach(block => {
      const yamlContent = block.replace(/```yaml\r?\n/, '').replace(/\r?\n```/, '')
      try {
        const parsed = yaml.load(yamlContent) as any
        
        // 合并解析的数据到结果中
        Object.keys(parsed).forEach(key => {
          if (key in result) {
            result[key as keyof OldMembersData] = parsed[key] || []
          }
        })
      } catch (error) {
        console.warn('Failed to parse YAML block:', error)
      }
    })
    
    return result
  }
}

export const data = {
  load(): OldMembersData {
    const filePath = path.resolve(__dirname, 'old-members-data.md')
    const content = fs.readFileSync(filePath, 'utf-8')
    
    // 提取标题
    const titleMatch = content.match(/^#\s+(.+)$/m)
    const title = titleMatch ? titleMatch[1] : undefined
    
    // 提取届次信息
    const sessionMatch = content.match(/##\s+第(.+?)届成员/m)
    const session = sessionMatch ? sessionMatch[1] : undefined
    
    // 提取所有YAML代码块
    const yamlBlocks = content.match(/```yaml\n([\s\S]*?)\n```/g) || []
    
    // 尝试不同的正则表达式
    const altRegex = /```yaml\r?\n([\s\S]*?)\r?\n```/g
    const altBlocks = content.match(altRegex) || []
    
    // 使用找到的块
    const finalBlocks = yamlBlocks.length > 0 ? yamlBlocks : altBlocks
    
    const result: OldMembersData = {
      title,
      session,
      leaders: [],
      devbranch: [],
      cybersec: [],
      opergroup: [],
      publicity: [],
      secretariat: [],
      friends: []
    }
    
    // 解析每个YAML块
    yamlBlocks.forEach(block => {
      const yamlContent = block.replace(/```yaml\n/, '').replace(/\n```/, '')
      try {
        const parsed = yaml.load(yamlContent) as any
        
        // 合并解析的数据到结果中
        Object.keys(parsed).forEach(key => {
          if (key in result) {
            result[key as keyof OldMembersData] = parsed[key] || []
          }
        })
      } catch (error) {
        console.warn('Failed to parse YAML block:', error)
      }
    })
    
    return result
  }
}

// 导出类型定义供其他文件使用
export type { OldMembersData, TeamMember, SocialLink, SocialLinkIcon }