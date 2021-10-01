import styled from "@emotion/styled"

const LayoutContainer = styled.div`

`;

export default function Layout({ children }) {
  return (
    <LayoutContainer>
      {children}
    </LayoutContainer>
  )
}