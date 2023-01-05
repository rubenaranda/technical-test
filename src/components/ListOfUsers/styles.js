import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const Frame = styled.div`
${withTheme('font-family', 'fonts.body')}
`

export const Logo = styled.img`
width: 35rem;
height: 4.5rem;
padding-left: 22rem;
padding-top: 5rem;
padding-bottom: 5rem;
`

export const UnorderedList = styled.ul`
display: grid;
justify-content: center;
`

export const ListItem = styled.li`
display: inline-flex;
underline-align: center; 
`

export const DataItem = styled.div`
display: inline-block;
${withTheme('margin-left', 'sizes.medium')}
border-bottom:1px solid black;
text-align: center;
`

export const ImageItem = styled.img`
${withTheme('width', 'sizes.image')}
${withTheme('height', 'sizes.image')}
`

export const ItemName = styled.p`
font-weight: bold;
`
