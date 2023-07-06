import styled from 'styled-components';

export const DIV = styled.div``;

export const PageContainer = styled.div`
  padding: 0 1rem;
  margin: 0 auto;
  max-width: 1024px;
  background: rgba(117, 115, 115, 0.11);
  box-shadow: 10px 0 5px -5px rgba(0, 0, 0, 0.15), -10px 0 5px -5px rgba(0, 0, 0, 0.15);
`;

export const H1 = styled.h1`
  padding: 2rem 0;
`;
export const H2 = styled.h2``;
export const H3 = styled.h3``;
export const H4 = styled.h4``;
export const H5 = styled.h5``;

export const OL = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
export const UL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0.5rem 0;
  list-style-type: ${(pr) => pr?.listStyle || 'square'};
`;
export const LI = styled.li``;

export const Def = styled.p``;
export const Text = styled.p``;

export const Pre = styled.pre`
  margin: 0;
`;
export const Code = styled.code`
  display: flex;
  width: max-content;
  margin: 0.25rem 0;
  background-color: rgba(52, 53, 65, 1);
  padding: 0.25rem 0.75rem;
  border: 1px solid rgba(52, 53, 65, 1);
  border-radius: 0.5rem;
  font-family: "Courier New", monospace;
  color: #FCE22A;
`;
export const CodeL = styled.code`
  display: inline-flex;
  padding: 0 0.1rem;
  font-family: "Courier New", monospace;
  color: #e324bd;
  font-weight: 600;
  letter-spacing: -2px;
`;
