<!--
 * @Author: Wannaer
 * @Date: 2024-05-25 16:06:57
 * @Description:
-->

# 组成的目录结构大致如下：

```
├── docs                            // 文档部署目录（Github Pages）
└── package.json                    // package.json
```

### Git 提交规范

- `ci`: ci 配置文件和脚本的变动;
- `chore`: 构建系统或辅助工具的变动;
- `fix`: 代码 BUG 修复;
- `feat`: 新功能;
- `perf`: 性能优化和提升;
- `refactor`: 仅仅是代码变动，既不是修复 BUG 也不是引入新功能;
- `style`: 代码格式调整，可能是空格、分号、缩进等等;
- `docs`: 文档变动;
- `test`: 补充缺失的测试用例或者修正现有的测试用例;
- `revert`: 回滚操作;
