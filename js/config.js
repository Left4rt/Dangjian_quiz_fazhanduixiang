"use strict";
/* ============================================================
 * config.js — 全局常量与配置
 * 修改题库来源路径、默认抽题量、存储键都在这里。
 * ============================================================ */
window.CFG = {
  // 阶段标识（用于首页与关于页展示，区分预备党员 / 发展对象两个程序）
  STAGE: '发展对象',

  // 题库根目录（相对 index.html）。GitHub Pages 上即 “同级 bank 文件夹”。
  BANK_BASE: 'bank/',
  MANIFEST: 'bank/manifest.json',

  TYPE_NAMES: { single: '单选题', multi: '多选题', tf: '判断题', fill: '填空题' },
  TYPE_ORDER: ['single', 'multi', 'tf', 'fill'],
  DEFAULT_QUOTA: { single: 40, multi: 20, tf: 20, fill: 20 },

  // localStorage 键（发展对象使用独立命名空间 fzdx，避免与预备党员程序共享/覆盖进度）
  LS: {
    WRONG:    'djq_fzdx_wrong_v4',
    FAVS:     'djq_fzdx_favs_v4',
    BANNED:   'djq_fzdx_banned_v4',
    HISTORY:  'djq_fzdx_history_v4',
    PRACTICED:'djq_fzdx_practiced_v4',  // 刷过的题
    SETTINGS: 'djq_fzdx_settings_v4',
    SLOTS:    'djq_fzdx_slots_v4',       // 存档槽
    RESUME:   'djq_fzdx_resume_v4',      // 断点续做：未完成的答题会话快照
  },

  // 存档码前缀（用于识别 / 版本管理）
  ARCHIVE_PREFIX_COMPACT_GZIP: 'DJC1:',  // 新：紧凑格式 + gzip + base64（默认导出）
  ARCHIVE_PREFIX_COMPACT_PLAIN: 'DJC0:', // 新：紧凑格式 + 纯 base64（不支持压缩时）
  ARCHIVE_PREFIX_GZIP: 'DJZ1:',  // 旧：完整格式 gzip + base64（仍可导入）
  ARCHIVE_PREFIX_PLAIN: 'DJB1:', // 旧：完整格式 纯 base64（仍可导入）
  ARCHIVE_VERSION: 5,

  APP_VERSION: 'v4.5',
};
