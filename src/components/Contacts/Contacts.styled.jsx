import styled from '@emotion/styled';

export const Contact = styled.div`
  form {
    display: flex;
    align-items: center;
    flex-direction: column;

    margin-bottom: 10px;
  }

  ul {
    margin: 0 auto;
    width: 350px;
    li {
      position: relative;
      height: 25px;

      margin-bottom: 5px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-right: 70px;

      button {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
`;
