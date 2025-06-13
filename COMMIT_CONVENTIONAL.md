# ✨ Guía de Commits Convencionales

Este proyecto utiliza el estándar de [Conventional Commits](https://www.conventionalcommits.org/) para mantener consistencia en el historial de versiones, facilitar la generación de changelogs y automatizar procesos de CI/CD.

---

## 📌 Formato de un commit

```
<tipo>(alcance opcional): descripción breve
```

### Ejemplos válidos:

```
feat(auth): implement Google OAuth
fix(image): resolve crash when uploading large files
docs(readme): update usage section
```

---

## 🔑 Tipos permitidos

| Tipo       | Propósito                                                           |
| ---------- | ------------------------------------------------------------------- |
| `feat`     | Nueva funcionalidad                                                 |
| `fix`      | Corrección de bugs                                                  |
| `docs`     | Cambios solo en la documentación                                    |
| `style`    | Cambios de formato (espacios, comas, etc) sin afectar lógica        |
| `refactor` | Refactorización sin cambios en funcionalidad o correcciones         |
| `perf`     | Mejoras de rendimiento                                              |
| `test`     | Agregar o actualizar pruebas                                        |
| `build`    | Cambios en herramientas de compilación o dependencias               |
| `ci`       | Cambios en la configuración de CI (GitHub Actions, etc)             |
| `chore`    | Mantenimiento general (no relacionado directamente a código de app) |
| `revert`   | Reversión de commits anteriores                                     |

---

## 📎 Buenas prácticas

- ✅ Usa verbos en infinitivo: `"add"`, `"fix"`, `"update"`.
- ❌ No empieces la descripción con mayúscula.
- ❌ No termines la línea con punto.
- ✍️ Sé breve pero claro en la descripción.
- 💡 El alcance (`(auth)`, `(readme)`, etc.) es opcional, pero recomendado.

---

## 🔧 Validación automática

Este proyecto usa [`commitlint`](https://github.com/conventional-changelog/commitlint) y [`husky`](https://typicode.github.io/husky/) para validar automáticamente los commits.

> ❗ Si el mensaje no cumple con el formato, **será rechazado**.

---

## 🧪 Ejemplo completo de flujo

```bash
git add .
git commit -m "feat(profile): add image upload with Supabase"
git push origin mi-rama
```

✅ ¡Y listo!

---

## 📚 Recursos adicionales

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Husky](https://typicode.github.io/husky/#/)
