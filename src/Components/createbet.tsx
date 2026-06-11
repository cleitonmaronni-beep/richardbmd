import React, { useState } from 'react';

export default function ModalApostaWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNumbers, setSelectedNumbers] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Gera array de "00" a "99"
  const numbers = Array.from({ length: 100 }, (_, i) => i.toString().padStart(2, '0'));

  // Agrupa os 100 números em matriz 10x10 para a tabela
  const rows = [];
  for (let i = 0; i < 100; i += 10) {
    rows.push(numbers.slice(i, i + 10));
  }

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

    const message = `Olá amigo! Seguem meus números escolhidos pelo site:\n\n*Nome:* ${name}\n*WhatsApp:* ${phone}\n*Dezenas Escolhidas:* ${selectedNumbers.join(' ')}`;
    const encodedMessage = encodeURIComponent(message);
    
    const adminPhone = "5521980906884"; 
    
    window.open(`https://wa.me/${adminPhone}?text=${encodedMessage}`, '_blank');
  };

  // Botão Inicial para abrir o Modal
  if (!isOpen) {
    return (
      <div className="d-flex justify-content-center p-4">
        <button 
          onClick={() => setIsOpen(true)} 
          className="btn btn-success btn-lg fw-bold fs-2 px-5 py-3 shadow"
        >
          🎯 Escolha suas Dezenas!
        </button>
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', padding: '16px', zIndex: 9999
    }}>
      {/* Container do Modal expandido para caber a tabela inteira (max-width: 600px) */}
      <div className="bg-white rounded-3 p-4 shadow-lg position-relative w-100" style={{ maxWidth: '600px', maxHeight: '95vh', overflowY: 'auto' }}>
        
        {/* Botão Fechar (X) */}
        <button 
          onClick={() => setIsOpen(false)} 
          className="btn-close position-absolute top-0 end-0 m-3"
          aria-label="Close"
        />

        <h2 className="fs-4 fw-bold text-center mb-2 text-dark">
          Escolha suas 10 Dezenas
        </h2>
        
        {/* Contador */}
        <p className="fs-6 text-center mb-3 fw-semibold text-secondary">
          Selecionados: <span className="text-success fs-5 fw-bold">{selectedNumbers.length}</span> de 10
        </p>

        {/* Botões Limpar e Surpresinha */}
        <div className="d-flex justify-content-between gap-2 mb-3">
          <button
            type="button"
            onClick={clearSelection}
            disabled={selectedNumbers.length === 0}
            className="btn btn-outline-secondary btn-sm fw-semibold"
          >
            🗑️ Limpar Seleção
          </button>
          
          <button
            type="button"
            onClick={generateSurprise}
            className="btn btn-primary btn-sm fw-semibold"
          >
            🎲 Surpresinha
          </button>
        </div>

        {/* Tabela de Dezenas Completa (Sem Barra de Rolagem) */}
        <div className="table-responsive m-0 p-0 mb-3" style={{ overflow: 'hidden' }}>
          <table className="table table-bordered table-sm text-center m-0 align-middle" style={{ tableLayout: 'fixed' }}>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((num) => {
                    const isSelected = selectedNumbers.includes(num);
                    const isDisabled = !isSelected && selectedNumbers.length >= 10;
                    
                    return (
                      <td key={num} className="p-1" style={{ width: '10%' }}>
                        <button
                          type="button"
                          disabled={isDisabled}
                          onClick={() => toggleNumber(num)}
                          className={`btn w-100 p-2 fw-bold lh-1 btn-sm transition-all ${
                            isSelected 
                              ? 'btn-success text-white shadow-sm' 
                              : 'btn-light border text-dark'
                          }`}
                          style={{ 
                            fontSize: '13px',
                            cursor: isDisabled ? 'not-allowed' : 'pointer',
                            opacity: isDisabled ? 0.35 : 1
                          }}
                        >
                          {num}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Input de Dezenas Selecionadas */}
        <div className="mb-3">
          <label className="form-label fw-semibold text-secondary mb-1 small">
            Dezenas Selecionadas
          </label>
          <input
            type="text"
            readOnly
            placeholder="Nenhuma dezena selecionada"
            value={selectedNumbers.join(' ')}
            className="form-control form-control-lg bg-light text-center fw-bold text-dark font-monospace"
            style={{ letterSpacing: '2px' }}
          />
        </div>

        {/* Formulário */}
        <form onSubmit={handleSend} className="d-flex flex-column gap-3">
          <div>
            <label className="form-label fw-semibold text-secondary mb-1 small">
              Nome Completo
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome"
              className="form-control"
            />
          </div>

          <div>
            <label className="form-label fw-semibold text-secondary mb-1 small">
              WhatsApp
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(00) 99999-9999"
              className="form-control"
            />
          </div>

          {/* Botão Enviar */}
          <button
            type="submit"
            className="btn btn-success btn-lg w-100 fw-bold mt-2 shadow-sm"
          >
            ✅ Enviar Palpite via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
