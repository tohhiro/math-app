import React from "react";

type Props = {
  onHandleReset: () => void;
};

export const ResetButton: React.FC<Props> = (props: Props) => {
  const { onHandleReset } = props;
  return <button onClick={onHandleReset}>リセット</button>;
};
