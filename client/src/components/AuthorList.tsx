import { coauthors } from "@/content/data";
import React from "react";

interface AuthorListProps {
    authors: string[];
}

export function AuthorList({ authors }: AuthorListProps) {
    return (
        <span>
            {authors.map((author, index) => {
                const isMe = author === "Manyi Yao";
                const url = coauthors[author];
                const isLast = index === authors.length - 1;

                let content;
                if (isMe) {
                    content = <span className="font-bold">{author}</span>;
                } else if (url) {
                    content = (
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-dashed decoration-1 underline-offset-4 hover:text-primary transition-colors"
                        >
                            {author}
                        </a>
                    );
                } else {
                    content = <span className="underline decoration-dashed decoration-1 underline-offset-4">{author}</span>;
                }

                return (
                    <React.Fragment key={index}>
                        {content}
                        {!isLast && ", "}
                    </React.Fragment>
                );
            })}
        </span>
    );
}
