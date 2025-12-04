export interface ButtonClickPayload {
  appName: string;
  label: string;
  timestamp: number;
}

/**
 * 公共方法：记录按钮点击日志
 */
export function logButtonClick(appName: string, label: string): ButtonClickPayload {
  const payload: ButtonClickPayload = {
    appName,
    label,
    timestamp: Date.now(),
  };

  // 这里先简单用 console 统一输出，后续可以扩展为上报埋点、调用后端等
  // 为了在浏览器中清晰区分，这里加上统一前缀
  console.log('[common-functions] button click', payload);

  return payload;
}
