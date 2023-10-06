/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Header() {
  return (
    <header
      css={css`
        padding: 34px 45px;
        display: flex;
        justify-content: space-between;
        background-color: hotpink;
        color: white;
      `}
    >
      <div
        css={css`
          font-size: 40px;
        `}
      >
        掲示板
      </div>
      <a
        // リンク仮置き　要修正
        href="https://techtrain.dev/mypage/railway"
        css={css`
          display: flex;
          align-items: center;
          font-size: 24px;
        `}
      >
        Tech Train
      </a>
    </header>
  );
}

export default Header;
