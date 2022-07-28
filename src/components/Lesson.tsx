import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Link, useParams } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();
  const isLessonAvailable = isPast(props.availableAt);

  const formatAvailableAt = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActiveSlug = slug === props.slug;
  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{formatAvailableAt}</span>

      <div
        className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors ${
          isActiveSlug ? "bg-green-500" : ""
        }`}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={`text-sm font-medium flex items-center gap-2 ${
                isActiveSlug ? "text-white" : "text-blue-500"
              }`}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={`text-xs rounded py-[0.125rem] px-2 border text-white font-bold ${
              isActiveSlug ? "border-white" : "border-green-300"
            }`}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong
          className={`mt-5 block ${
            isActiveSlug ? "text-white" : "text-gray-200"
          }`}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
