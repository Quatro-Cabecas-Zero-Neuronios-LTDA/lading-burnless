import Logo from './Logo.tsx'

export default function Footer() {
  return (
    <footer className="bg-primary-deep py-12 text-white/70">
      <div className="container-page flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed">
            Prevenção de burnout, coach de sono e encaminhamento seguro para estudantes.
          </p>
        </div>

        <div className="text-sm md:text-right">
          <p className="font-semibold text-white">HackBrasil 2026</p>
          <p className="mt-1">Trilha Saúde &amp; Bem-estar</p>
          <p className="mt-1">Equipe Quatro Cabeças Zero Neurônios</p>
        </div>
      </div>

      <div className="container-page mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/50">
        O Burnless não substitui avaliação, diagnóstico ou tratamento por profissionais de saúde. Em emergências, ligue
        192 (SAMU). Para apoio emocional, ligue 188 (CVV).
      </div>
    </footer>
  )
}
