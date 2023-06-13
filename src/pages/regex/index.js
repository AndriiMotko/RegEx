import React from "react";
import { PageContainer, H1, H2, H3, H4, OL, LI, Def, Text, Code } from "./regex.styles";

const RegexPage = () => {
  return (
    <PageContainer>
      <H1>Вивчаємо RegEx</H1>
      <H2>Синтаксис RegEx</H2>

      <OL>
        <LI>
          <H4>Символи</H4>
          <Def>Усі символи, окрім тих, що мають спеціальне значення в регулярному виразі, збігаються самі.</Def>
          <Text> Наприклад, регулярний вираз x відповідає підрядку "x"; регулярний вираз 9 відповідає "9"; регулярний вираз = відповідає "="; і регулярний вираз @ відповідає "@"</Text>
        </LI>

        <LI>
          <H4>Спеціальні символи Regex:</H4>
          <Def>Ці символи мають особливе значення в регулярних виразах (про які йдеться нижче):</Def>
          <Text>
            <Code>
              {`., +, *, ?, ^, $, (, ), [, ], {, }, |, \/`}
            </Code>
          </Text>
        </LI>
      </OL>

    </PageContainer>

  );
};

export default RegexPage;