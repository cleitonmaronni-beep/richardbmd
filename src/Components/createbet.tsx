import React, { useState } from 'react';

export default function ModalApostaWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNumbers, setSelectedNumbers] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Gera array de "00" a "99"
  const numbers = Array.from({ length: 100 }, (_, i) => i.toString().padStart(2, '0'));

  const toggleNumber = (num: string) => {
    if (selectedNumbers.includes(num)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== num));
    } else if (selectedNumbers.length < 10) {
      setSelectedNumbers([...selectedNumbers, num].sort((a, b) => Number(a) - Number(b)));
    }
  };

  const clearSelection = () => {
    setSelectedNumbers([]);
  };

  const generateSurprise = () => {
    const shuffled = [...numbers].sort(() => 0.5 - Math.random());
    const randomTen = shuffled.slice(0, 10).sort((a, b) => Number(a) - Number(b));
    setSelectedNumbers(randomTen);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedNumbers.length !== 10) {
      alert('Por favor, selecione exatamente 10 dezenas.');
      return;
    }

    const message = `Olá! Seguem meus números escolhidos:\n\n*Nome:* ${name}\n*WhatsApp:* ${phone}\n*Dezenas Escolhidas:* ${selectedNumbers.join(', ')}`;
    const encodedMessage = encodeURIComponent(message);
    
    // Substitua pelo seu número de atendimento (com código do país e DDD)
    const adminPhone = "5521993566797"; 
    
    window.open(`https://wa.me{adminPhone}&text=${encodedMessage}`, '_blank');
  };

  // Botão para reabrir caso o modal seja fechado
  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)} 
        style={{ padding: '10px 20px', backgroundColor: '#16a34a', color: '#fff', border: '10px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize:'36px'}}
      >
        Escolha suas Dezenas!
      </button>
    );
  }

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', padding: '16px', zIndex: 9999
    }}>
      <div style={{
        backgroundColor: '#fff', borderRadius: '8px', padding: '24px',
        maxWidth: '500px', width: '100%', maxHeight: '90vh', overflowY: 'auto',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)', position: 'relative', fontFamily: 'sans-serif'
      }}>
        
        {/* Botão Fechar (X) */}
        <button 
          onClick={() => setIsOpen(false)} 
          style={{
            position: 'absolute', top: '16px', right: '16px', border: 'none',
            background: 'none', fontSize: '18px', fontWeight: 'bold', color: '#6b7280', cursor: 'pointer'
          }}
        >
          ✕
        </button>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', color: '#1f2937', textAlign: 'center' }}>
          Escolha suas 10 Dezenas
        </h2>
        
        {/* Contador */}
        <p style={{ fontSize: '14px', textAlign: 'center', marginBottom: '16px', fontWeight: 600, color: '#4b5563' }}>
          Selecionados: <span style={{ color: '#16a34a', fontSize: '18px', fontWeight: 'bold' }}>{selectedNumbers.length}</span> de 10
        </p>

        {/* Botões Limpar e Surpresinha */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', marginBottom: '12px' }}>
          <button
            type="button"
            onClick={clearSelection}
            disabled={selectedNumbers.length === 0}
            style={{
              padding: '6px 12px', fontSize: '12px', fontWeight: '600',
              backgroundColor: '#e5e7eb', color: '#374151', border: 'none', borderRadius: '4px',
              cursor: selectedNumbers.length === 0 ? 'not-allowed' : 'pointer',
              opacity: selectedNumbers.length === 0 ? 0.5 : 1
            }}
          >
            🗑️ Limpar Seleção
          </button>
          
          <button
            type="button"
            onClick={generateSurprise}
            style={{
              padding: '6px 12px', fontSize: '12px', fontWeight: '600',
              backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer'
            }}
          >
            🎲 Surpresinha
          </button>
        </div>

        {/* Grade de Números 00-99 */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(10, minmax(0, 1fr))', gap: '4px',
          marginBottom: '16px', maxHeight: '240px', overflowY: 'auto', padding: '8px',
          border: '1px solid #e5e7eb', borderRadius: '4px', backgroundColor: '#f9fafb'
        }}>
          {numbers.map((num) => {
            const isSelected = selectedNumbers.includes(num);
            const isDisabled = !isSelected && selectedNumbers.length >= 10;
            
            return (
              <button
                key={num}
                type="button"
                disabled={isDisabled}
                onClick={() => toggleNumber(num)}
                style={{
                  padding: '6px 2px', fontSize: '12px', fontWeight: 'bold', borderRadius: '4px',
                  border: isSelected ? '1px solid #15803d' : '1px solid #d1d5db', textAlign: 'center',
                  cursor: isDisabled ? 'not-allowed' : 'pointer',
                  backgroundColor: isSelected ? '#16a34a' : '#fff',
                  color: isSelected ? '#fff' : '#374151',
                  opacity: isDisabled ? 0.4 : 1
                }}
              >
                {num}
              </button>
            );
          })}
        </div>

        {/* Input de Dezenas Selecionadas */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '4px' }}>
            Dezenas Selecionadas
          </label>
          <input
            type="text"
            readOnly
            placeholder="Nenhuma dezena selecionada"
            value={selectedNumbers.join(', ')}
            style={{
              width: '100%', backgroundColor: '#f3f4f6', border: '1px solid #d1d5db',
              borderRadius: '4px', padding: '8px', fontSize: '14px', fontFamily: 'monospace',
              fontWeight: 'bold', color: '#1f2937', textAlign: 'center', outline: 'none', boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Formulário */}
        <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '4px' }}>
              Nome Completo
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome"
              style={{
                width: '100%', border: '1px solid #d1d5db', borderRadius: '4px',
                padding: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '4px' }}>
              WhatsApp
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(00) 99999-9999"
              style={{
                width: '100%', border: '1px solid #d1d5db', borderRadius: '4px',
                padding: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Botão Enviar */}
          <button
            type="submit"
            disabled={selectedNumbers.length !== 10}
            style={{
              width: '100%', padding: '12px 0', borderRadius: '4px', fontWeight: 'bold',
              color: '#fff', border: 'none', cursor: selectedNumbers.length === 10 ? 'pointer' : 'not-allowed',
              backgroundColor: selectedNumbers.length === 10 ? '#16a34a' : '#9ca3af',
              boxShadow: selectedNumbers.length === 10 ? '0 4px 6px rgba(0,0,0,0.05)' : 'none'
            }}
          >
            Enviar via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
