markdown_content = """# MintyFresh Design System

A clean, modern, and breathable design system focused on clarity and a refreshing user experience.

## 🎨 Color Tokens

### Core Palette
Used for primary actions and the overall "feel" of the interface.
| Token | Hex | Preview |
| :--- | :--- | :--- |
| **Primary** | `#CFFFEF` | ![#CFFFEF](https://via.placeholder.com/15/CFFFEF?text=+) |
| **Background** | `#F8FFFD` | ![#F8FFFD](https://via.placeholder.com/15/F8FFFD?text=+) |
| **Surface** | `#FFFFFF` | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF?text=+) |

### Text Palette
Ensures high legibility and proper information hierarchy.
| Token | Hex | Usage |
| :--- | :--- | :--- |
| **Text/Primary** | `#0B1F1A` | Main headings and body text |
| **Text/Secondary**| `#5F7D76` | Captions, labels, and helper text |

### UI Accents
Functional colors for interactivity and layout.
| Token | Hex | Usage |
| :--- | :--- | :--- |
| **Border** | `#DFF7F1` | Subtle separation for cards and inputs |
| **Hover** | `#A8F5E0` | Interaction state for buttons/links |

---

## 🔤 Typography

### Font Families
- **Main Landing Page:** `Satoshi` (Display & Brand)
- **General UI/System:** `Inter` (Functional & Readable)

### Type Scale
| Level | Size | Weight | Tracking | Font |
| :--- | :--- | :--- | :--- | :--- |
| **H1** | 56px | Medium | -1% | Satoshi |
| **H2** | 36px | Medium | 0 | Satoshi |
| **Body** | 16px | Regular | 0 | Inter |
| **Small** | 14px | Regular | 0 | Inter |

---

## 📐 Spacing System (8pt Grid)
All layout, margins, and padding must follow the 8pt incremental scale to maintain visual rhythm.

| Scale | Value (px) | Usage |
| :--- | :--- | :--- |
| **XXS** | 4 | Tiny details, tight grouping |
| **XS** | 8 | Icon/Text spacing |
| **S** | 16 | Internal padding, small margins |
| **M** | 24 | Standard gutters |
| **L** | 32 | Section spacing |
| **XL** | 48 | Large layout gaps |
| **XXL** | 64 | Hero section margins |

---

## 🧱 Components

### Buttons
Primary call-to-action elements.
- **Radius:** `10px`
- **Padding:** `12px 20px` (Top/Bottom, Left/Right)
- **Background:** `#CFFFEF` (Mint)
- **Hover State:** Background shifts to `#A8F5E0`
- **Text Color:** `#0B1F1A`

### Cards
Containers for grouped content.
- **Radius:** `12px`
- **Border:** `1px solid #DFF7F1`
- **Background:** `#FFFFFF` (Surface)
- **Shadow:** `0px 4px 12px rgba(11, 31, 26, 0.03)` (Very soft, using Text/Primary for the tint)
- **Internal Padding:** Recommended `24px` (Scale M)

---

## 💻 CSS Variables Quick Start
```css
:root {
  /* Colors */
  --color-primary: #CFFFEF;
  --color-bg: #F8FFFD;
  --color-surface: #FFFFFF;
  --color-text-primary: #0B1F1A;
  --color-text-secondary: #5F7D76;
  --color-border: #DFF7F1;
  --color-hover: #A8F5E0;

  /* Spacing */
  --space-4: 4px;
  --space-8: 8px;
  --space-16: 16px;
  --space-24: 24px;
  --space-32: 32px;
  --space-48: 48px;
  --space-64: 64px;

  /* Typography */
  --font-brand: 'Satoshi', sans-serif;
  --font-ui: 'Inter', sans-serif;
}