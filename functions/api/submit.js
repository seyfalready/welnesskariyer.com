export async function onRequestPost(context) {
  const { request, env } = context;
  const RESEND_API_KEY = env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: "Sunucu hatası: API anahtarı eksik." }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const data = await request.json();
    const { firstName, lastName, phone, city, goal, message } = data;

    // Mail içeriğini hazırlayalım
    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px;">
        <h2 style="color: #0a1f44; margin-top: 0;">Yeni Xaura İş Ortağı Başvurusu</h2>
        <p style="color: #475569; font-size: 14px;">Web sitesindeki form üzerinden yeni bir başvuru alındı. Detaylar aşağıdadır:</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="margin-bottom: 12px;"><strong>Ad Soyad:</strong> ${firstName} ${lastName}</li>
          <li style="margin-bottom: 12px;"><strong>Telefon:</strong> <a href="tel:${phone}" style="color: #2d69e9;">${phone}</a></li>
          <li style="margin-bottom: 12px;"><strong>Şehir:</strong> ${city}</li>
          <li style="margin-bottom: 12px;"><strong>İlgi Alanı / Hedef:</strong> ${goal}</li>
          <li style="margin-bottom: 12px;"><strong>Mesaj:</strong> ${message || '<i>Belirtilmedi</i>'}</li>
        </ul>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
        <p style="font-size: 12px; color: #94a3b8; margin-bottom: 0;">Bu e-posta Xaura Global Türkiye sisteminden otomatik olarak gönderilmiştir.</p>
      </div>
    `;

    // Resend'e API çağrısı yapalım
    // Not: "from" adresi için eğer Resend'de domain onayladıysanız noreply@wellnesskariyer.com kullanabilirsiniz.
    // Onaylamadıysanız onboarding@resend.dev adresi üzerinden sadece kendi mailinize test atabilirsiniz.
    const fromEmail = env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: `Xaura Sistem <${fromEmail}>`,
        to: 'bilgi@wellnesskariyer.com',
        subject: `Yeni Başvuru: ${firstName} ${lastName} - ${city}`,
        html: emailHtml
      })
    });

    const resData = await res.json();
    
    if (res.ok) {
      return new Response(JSON.stringify({ success: true, id: resData.id }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({ error: resData }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
