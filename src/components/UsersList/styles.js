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
text-align: center;
`

export const DataItem = styled.div`
display: inline-block;
${withTheme('margin-left', 'sizes.medium')}
text-align: center;
border-bottom:1px solid black;
`

export const ImageItem = styled.img`
${withTheme('width', 'sizes.image')}
${withTheme('height', 'sizes.image')}
`

export const ItemName = styled.p`
font-weight: bold;
`

export const AddButton = styled.button`
width: 5rem;
height: 2rem;
border-radius: 0.5rem;
border-color: black;
margin-left: 40rem;
`
