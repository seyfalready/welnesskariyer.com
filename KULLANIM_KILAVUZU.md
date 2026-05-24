# Xaura Türkiye Landing Page — Kullanım Kılavuzu

## 🚀 Ne aldın?

Tek dosyalık (`index.html`), responsive, KVKK uyumlu bir lead capture landing page.

- Bütün CSS/JS dosyanın içinde, harici bağımlılık yok (sadece Google Fonts)
- Mobil + tablet + desktop uyumlu
- Form WhatsApp'a entegre — kullanıcı bilgileri girdiğinde sana WhatsApp'tan otomatik mesaj olarak düşer
- Gelir feragatnamesi + KVKK aydınlatma metni placeholder'ı dahil

---

## ⚙️ Yapılacaklar (kritik — atlamayın)

### 1. WhatsApp numaranı ekle
Dosyanın altındaki `<script>` bölümünde bu satırı bul:
```js
const WHATSAPP_NUMBER = "905XXXXXXXXX";  // ← BURAYA KENDİ NUMARANI YAZ
```
Örnek: `905554443322` (başında + ya da 00 yok, Türkiye kodu 90 ile başlar).

### 2. (Opsiyonel) Lead'leri ayrıca kaydetmek istersen
[Formspree](https://formspree.io) veya [Web3Forms](https://web3forms.com) gibi ücretsiz bir servise hesap aç,
endpoint URL'ini al ve şuraya yapıştır:
```js
const FORMSPREE_URL = "https://formspree.io/f/YOURFORMID";
```
Böylece lead'ler hem WhatsApp'a hem e-postana / formspree paneline gelir.

### 3. KVKK Aydınlatma Metnini yaz
Form altında "KVKK Aydınlatma Metni" linki şu anda placeholder alert gösteriyor.
Bunu kendi KVKK metnine bağla — yoksa Ticaret Bakanlığı denetiminde sorun yaşarsın.

Hızlı yol: KVKK aydınlatma metni şablonlarından birini kullan, sonuna iletişim bilgini ekle.

### 4. WhatsApp linkini footer'da da güncelle
Footer'da bir tane daha `wa.me/905XXXXXXXXX` linki var (sadece görsel olarak), onu da güncelle.

---

## 📤 Nereye yükleyeceksin?

### En kolay (ücretsiz) seçenekler:
- **Netlify Drop**: [netlify.com/drop](https://app.netlify.com/drop) — dosyayı sürükle bırak, 30 saniyede yayında
- **Vercel**: GitHub'a koyup bağla
- **Cloudflare Pages**: Aynı şekilde, GitHub üzerinden

### Domain
Reklam başlatmadan önce kendi domainini al (örn: `xauraturkiye.com`, `xaurafirsat.com` vs.).
- Netlify/Vercel'in `.netlify.app` subdomain'iyle reklam çıkma — güvensiz görünür, conversion düşer.

---

## 🎨 Özelleştirme noktaları

Tasarımı değiştirmek istersen, dosyanın başındaki `:root` CSS bloğunda renkler:
```css
:root {
  --navy-900: #0a1f44;   /* Ana lacivert */
  --blue-500: #2d69e9;   /* Vurgu mavi */
  --gold:     #b88a4f;   /* Sıcak vurgu */
  --pearl:    #f6f4ef;   /* Krem arka plan */
}
```

Yazı tipini değiştirmek istersen, `<head>` içindeki Google Fonts linkini güncelle.

---

## ⚠️ Reklam tarafına geçmeden önce — yasal hatırlatmalar

1. **Gelir vaadi YASAK**: Reklam görselinde "şu kadar kazanırsın", "günde X TL", "garanti gelir" türü ifadeler
   kullanma. Bu hem Meta/Google reklam politikalarına aykırı (reklam reddi gelir) hem Ticaret Bakanlığı denetiminde sorun.

2. **Reklam kreatifinde MUTLAKA**:
   - "Bağımsız distribütörlük fırsatı" ibaresi
   - Gelir feragatnamesi (küçük punto da olsa)
   - Aldatıcı görsel kullanma (lüks araba, para destesi vs. = reddedilir)

3. **Lead'lerle iletişimde**: KVKK kapsamında, kişiye 24 saat içinde dönüş yapamayacaksan, bilgilerini saklama.

4. **Sayfada belirttiğin gibi**: Bu site Xaura Global'in **resmi sitesi değildir**, bağımsız iş ortağı sayfasıdır.
   Bu ibareyi mutlaka koru — Xaura'nın resmi sitesini taklit ediyor görüntüsü vermek hem yasal hem etik sorun.

---

## 🔄 Sıradaki adım

Hazır olduğunda reklam kreatifleri için seninle:
- Meta (Facebook/Instagram) reklam görselleri
- Hook + caption metinleri
- Reklam stratejisi (audience, bütçe, A/B test planı)

…üzerinde çalışabiliriz. Bana haber ver.
