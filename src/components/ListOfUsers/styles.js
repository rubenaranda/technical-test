import styled from '@emotion/styled'
import { withTheme } from '../../helpers/styles.helper'

export const Frame = styled.div`
${withTheme('font-family', 'fonts.body')}
`

export const UnorderedList = styled.ul`
display: grid;
`

export const ListItem = styled.li`
display: inline-flex;
border-bottom:1px solid black;
text-align: center;
opacity:1;
`

export const DataItem = styled.div`
display: inline-block;
${withTheme('margin-left', 'sizes.medium')}
text-align: center;
`

export const ImageItem = styled.img`
${withTheme('width', 'sizes.image')}
${withTheme('height', 'sizes.image')}
`

export const ItemName = styled.p`
font-weight: bold;
`
